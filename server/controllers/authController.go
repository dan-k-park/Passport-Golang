package controllers

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"passport-api/configs"
	"passport-api/models"
	"passport-api/responses"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"golang.org/x/crypto/bcrypt"
)
var userCollection *mongo.Collection = configs.GetCollection(configs.DB, "users")

func hashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}


func checkPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

func Register(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var user models.User
	defer cancel()


	// validate request
	if err := c.BodyParser(&user); err != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.UserResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": err.Error()}})
}
	// validate required fields
	if validationErr := validate.Struct(&user); validationErr != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.UserResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": validationErr.Error()}})
	}

	// Hash password with bcrypt
	hashedPassword, _ := hashPassword(user.Password)

	newUser := models.User {
		Username: user.Username,
		Password: hashedPassword,
	}

	filterCursor, err := userCollection.Find(ctx, bson.M{"username": newUser.Username})
	if err != nil {
			log.Fatal(err)
	}
	var usersFiltered []bson.M
	if err = filterCursor.All(ctx, &usersFiltered); err != nil {
			log.Fatal(err)
	}
		if len(usersFiltered) >= 1 {
			return c.Status(http.StatusBadRequest).JSON(responses.UserResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": "Username taken"}})
		}

	result, err := userCollection.InsertOne(ctx, newUser)
	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})	}

	return c.Status(http.StatusCreated).JSON(responses.UserResponse{Status: http.StatusCreated, Message: "success", Data: &fiber.Map{"data": result}})
}



func Login(c * fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	body := struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}{}


	if err := c.BodyParser(&body); err != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.AuthResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}
	username := body.Username

	filterCursor, err := userCollection.Find(ctx, bson.M{"username": username})
	if err != nil {
		log.Fatal(err)
	}

	var usersFiltered []bson.M
	if err = filterCursor.All(ctx, &usersFiltered); err != nil {
			log.Fatal(err)
	}
	if len(usersFiltered) == 0 {
		return c.Status(fiber.StatusUnauthorized).JSON(responses.AuthResponse{Status: http.StatusUnauthorized, Message: "error", Data: &fiber.Map{
			"error": "Username not found",
		}}) 
	}
	user := usersFiltered[0]

	match := checkPasswordHash(body.Password, fmt.Sprint(user["password"]))

	if !match {
				return c.Status(fiber.StatusUnauthorized).JSON(responses.AuthResponse{Status: http.StatusUnauthorized, Message: "error", Data: &fiber.Map{
			"error": "Incorrect password",
		}})
	}

	
	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.RegisteredClaims{
		Issuer:    fmt.Sprint(user["username"]), // maybe not the best idea but can't query with ids since i don't have access to them
		ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Hour * 24 * 7)),
	})

	token, err := claims.SignedString([]byte(os.Getenv("SECRET")))

	if err != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"message": "could not login",
		})
	}

	cookie := fiber.Cookie{
		Name:     "jwt",
		Value:    token,
		Expires:  time.Now().Add(time.Hour * 24),
		HTTPOnly: true,
	}

	c.Cookie(&cookie)

	return c.JSON(fiber.Map{
		"message": "success",
	})
}	


func Logout(c *fiber.Ctx) error {
	cookie := fiber.Cookie{
		Name:     "jwt",
		Value:    "",
		Expires:  time.Now().Add(-time.Hour),
		HTTPOnly: true,
	}

	c.Cookie(&cookie)

	return c.JSON(fiber.Map{
		"message": "success",
	})
}

func User(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var user models.User

	defer cancel()
	cookie := c.Cookies("jwt")

	token, err := jwt.ParseWithClaims(cookie, &jwt.RegisteredClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(os.Getenv("SECRET")), nil
	})

	if err != nil {
		c.Status(fiber.StatusUnauthorized)
		return c.JSON(fiber.Map{
			"message": "unauthenticated",
		})
	}

	claims := token.Claims.(*jwt.RegisteredClaims)

	userCollection.FindOne(ctx, bson.M{"username": claims.Issuer}).Decode(&user)

	if err != nil {
			return c.Status(http.StatusInternalServerError).JSON(responses.TripResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	return c.JSON(user)
}