package controllers

import (
	"context"
	"net/http"
	"passport-api/configs"
	"passport-api/models"
	"passport-api/responses"
	"time"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var tripCollection *mongo.Collection = configs.GetCollection(configs.DB, "trips")
var validate = validator.New()

func CreateTrip(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var trip models.Trip
	defer cancel()

	// validate request
	if err := c.BodyParser(&trip); err != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.TripResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": err.Error()}})
}
	// validate required fields
	if validationErr := validate.Struct(&trip); validationErr != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.TripResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": validationErr.Error()}})
	}

	newTrip := models.Trip {
		Id: primitive.NewObjectID(),
		Country: trip.Country,
		Favorite: trip.Favorite,
		Favorite_Thing: trip.Favorite_Thing,
	}

	result, err := tripCollection.InsertOne(ctx, newTrip)
	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.TripResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})	}

	return c.Status(http.StatusCreated).JSON(responses.TripResponse{Status: http.StatusCreated, Message: "success", Data: &fiber.Map{"data": result}})
}

func GetTrip(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	tripId := c.Params("tripId")
	var trip models.Trip
	defer cancel()

	// Convert tripId forma  string to a primitive.ObjectID type
	// BSON type mongo uses
	objId, _ := primitive.ObjectIDFromHex(tripId)

	err := tripCollection.FindOne(ctx, bson.M{"id": objId}).Decode(&trip)
	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.TripResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}
	return c.Status(http.StatusOK).JSON(responses.TripResponse{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": trip}})
}

func EditTrip(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	tripId := c.Params("tripId")
	var trip models.Trip
	defer cancel()

	objId, _ := primitive.ObjectIDFromHex(tripId)

	 //validate the request body
	 if err := c.BodyParser(&trip); err != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.TripResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": err.Error()}})
}

//use the validator library to validate required fields
if validationErr := validate.Struct(&trip); validationErr != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.TripResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": validationErr.Error()}})
}

update := bson.M{"country": trip.Country, "favorite": trip.Favorite, "favorite_thing": trip.Favorite_Thing}
result, err := tripCollection.UpdateOne(ctx, bson.M{"id": objId}, bson.M{"$set": update})
 
if err != nil {
	return c.Status(http.StatusInternalServerError).JSON(responses.TripResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
}

var updatedTrip models.Trip
if result.MatchedCount == 1 {
	err := tripCollection.FindOne(ctx, bson.M{"id": objId}).Decode(&updatedTrip)

	if err != nil {
			return c.Status(http.StatusInternalServerError).JSON(responses.TripResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}
}

return c.Status(http.StatusOK).JSON(responses.TripResponse{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": updatedTrip}})
}

func DeleteTrip(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	tripId := c.Params("tripId")
	defer cancel()

	objId, _ := primitive.ObjectIDFromHex(tripId)

	result, err := tripCollection.DeleteOne(ctx, bson.M{"id": objId})
	if err != nil {
			return c.Status(http.StatusInternalServerError).JSON(responses.TripResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	if result.DeletedCount < 1 {
			return c.Status(http.StatusNotFound).JSON(
					responses.TripResponse{Status: http.StatusNotFound, Message: "error", Data: &fiber.Map{"data": "Trip with specified ID not found!"}},
			)
	}

	return c.Status(http.StatusOK).JSON(
			responses.TripResponse{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": "Trip successfully deleted!"}},
	)
}