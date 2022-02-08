package controllers

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"passport-api/responses"
	"time"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
)



func Login(c * fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	type request struct {
		Username string `json:"string`
		Password string `json:"password"`
	}

	var body request
	err := c.BodyParser(&body)
	if err != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.CountryResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	filterCursor, err := userCollection.Find(ctx, bson.M{"username": body.Username})
	if err != nil {
			c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"error": "Username not found",
			})
	}
	fmt.Println("Filter cursor: ", filterCursor)
	var usersFiltered []bson.M
	if err = filterCursor.All(ctx, &usersFiltered); err != nil {
			log.Fatal(err)
	}
	traveler := usersFiltered[0]

	fmt.Println(traveler)

	return traveler
}
