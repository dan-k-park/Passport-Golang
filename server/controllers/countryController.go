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

var countryCollection *mongo.Collection = configs.GetCollection(configs.DB, "countries")
var validate = validator.New()


func GetAllCountries(c * fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
    var countries []models.Country
    defer cancel()

    results, err := countryCollection.Find(ctx, bson.M{})

    if err != nil {
        return c.Status(http.StatusInternalServerError).JSON(responses.CountryResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
    }

    //reading from the db in an optimal way
    defer results.Close(ctx)
    for results.Next(ctx) {
        var singleCountry models.Country
        if err = results.Decode(&singleCountry); err != nil {
            return c.Status(http.StatusInternalServerError).JSON(responses.CountryResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
        }

        countries = append(countries, singleCountry)
    }

    return c.Status(http.StatusOK).JSON(
        responses.CountryResponse{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": countries}},
    )
}

func GetCountry(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	countryId := c.Params("countryId")
	var country models.Country
	defer cancel()

	// Convert tripId from a string to a primitive.ObjectID type
	// BSON type mongo uses
	objId, _ := primitive.ObjectIDFromHex(countryId)

	err := countryCollection.FindOne(ctx, bson.M{"id": objId}).Decode(&country)
	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.CountryResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}
	return c.Status(http.StatusOK).JSON(responses.CountryResponse{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": country}})
}

func EditCountry(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	countryId := c.Params("countryId")
	var country models.Country
	defer cancel()

	objId, _ := primitive.ObjectIDFromHex(countryId)

	 //validate the request body
	 if err := c.BodyParser(&country); err != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.CountryResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": err.Error()}})
}

//use the validator library to validate required fields
if validationErr := validate.Struct(&country); validationErr != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.CountryResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": validationErr.Error()}})
}

update := bson.M{"name": country.Name, "code": country.Code, "visits": country.Visits, "favorites": country.Favorites}
result, err := countryCollection.UpdateOne(ctx, bson.M{"id": objId}, bson.M{"$set": update})
 
if err != nil {
	return c.Status(http.StatusInternalServerError).JSON(responses.CountryResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
}

var updatedCountry models.Country
if result.MatchedCount == 1 {
	err := countryCollection.FindOne(ctx, bson.M{"id": objId}).Decode(&updatedCountry)

	if err != nil {
			return c.Status(http.StatusInternalServerError).JSON(responses.CountryResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}
}

return c.Status(http.StatusOK).JSON(responses.CountryResponse{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": updatedCountry}})
}

func SearchCountry(c *fiber.Ctx) error {

	return c.Status(http.StatusOK).JSON(
		"hi",
)
}