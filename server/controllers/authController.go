package controllers

import (
	"context"
	"log"
	"net/http"
	"os"
	"passport-api/responses"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)



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
			return c.Status(fiber.StatusUnauthorized).JSON(responses.AuthResponse{Status: http.StatusUnauthorized, Message: "error", Data: &fiber.Map{
				"error": "Username not found",
			}})
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

	if body.Password != user["password"] {
		return c.Status(fiber.StatusUnauthorized).JSON(responses.AuthResponse{Status: http.StatusUnauthorized, Message: "error", Data: &fiber.Map{
			"error": "Incorrect password",
		}})
	}
	 token := jwt.New(jwt.SigningMethodHS256)
	 claims := token.Claims.(jwt.MapClaims)
	 claims["username"] = username
	 claims["exp"] = time.Now().Add(time.Hour * 24 * 7)

	 t, err := token.SignedString([]byte(os.Getenv("SECRET")))
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"token": t,
		"user": struct {
			Id       primitive.ObjectID `bson:"id,omitempty" json:"id,omitempty"`
			Username string             `bson:"username,omitempty" json:"username,omitempty"`		
		}{
			Id: user["id"].(primitive.ObjectID),
			Username: username,
		},
	})
}	