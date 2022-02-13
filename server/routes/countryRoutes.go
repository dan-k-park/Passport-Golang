package routes

import (
	"passport-api/controllers" //add this

	"github.com/gofiber/fiber/v2"
)

func CountryRoute(app *fiber.App) {

	app.Get("/api/country/:countryId", controllers.GetCountry)

	app.Put("/api/country/:countryId", controllers.EditCountry)

	app.Get("/api/countries", controllers.GetAllCountries)
}