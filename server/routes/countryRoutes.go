package routes

import (
	"passport-api/controllers" //add this

	"github.com/gofiber/fiber/v2"
)

func CountryRoute(app *fiber.App) {

	app.Get("/country/:countryId", controllers.GetCountry)

	app.Put("/country/:countryId", controllers.EditCountry)

	app.Get("/countries", controllers.GetAllCountries)
}