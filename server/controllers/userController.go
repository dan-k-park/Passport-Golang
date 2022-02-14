package controllers

import (
	"context"
	"net/http"
	"passport-api/configs"
	"passport-api/models"
	"passport-api/responses"
	"time"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var userCollection *mongo.Collection = configs.GetCollection(configs.DB, "users")


func GetAllUsers(c * fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
    var users []models.User
    defer cancel()

    results, err := userCollection.Find(ctx, bson.M{})

    if err != nil {
        return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
    }

    //reading from the db in an optimal way
    defer results.Close(ctx)
    for results.Next(ctx) {
        var singleUser models.User
        if err = results.Decode(&singleUser); err != nil {
            return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
        }

        users = append(users, singleUser)
    }

    return c.Status(http.StatusOK).JSON(
        responses.UserResponse{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": users}},
    )
}

func GetUser(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	tripId := c.Params("tripId")
	var trip models.Trip
	defer cancel()

	// Convert tripId forma  string to a primitive.ObjectID type
	// BSON type mongo uses
	objId, _ := primitive.ObjectIDFromHex(tripId)

	err := tripCollection.FindOne(ctx, bson.M{"id": objId}).Decode(&trip)
	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}
	return c.Status(http.StatusOK).JSON(responses.UserResponse{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": trip}})
}

func EditUser(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	tripId := c.Params("tripId")
	var trip models.Trip
	defer cancel()

	objId, _ := primitive.ObjectIDFromHex(tripId)

	 //validate the request body
	 if err := c.BodyParser(&trip); err != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.UserResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": err.Error()}})
}

//use the validator library to validate required fields
if validationErr := validate.Struct(&trip); validationErr != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.UserResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": validationErr.Error()}})
}

update := bson.M{"country": trip.Country, "favorite": trip.Favorite, "favorite_thing": trip.Favorite_Thing}
result, err := tripCollection.UpdateOne(ctx, bson.M{"id": objId}, bson.M{"$set": update})
 
if err != nil {
	return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
}

var updatedTrip models.Trip
if result.MatchedCount == 1 {
	err := tripCollection.FindOne(ctx, bson.M{"id": objId}).Decode(&updatedTrip)

	if err != nil {
			return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}
}

return c.Status(http.StatusOK).JSON(responses.UserResponse{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": updatedTrip}})
}