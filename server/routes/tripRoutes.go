package routes

import (
	"passport-api/controllers" //add this

	"github.com/gofiber/fiber/v2"
)

func TripRoute(app *fiber.App) {
	app.Post("/trip", controllers.CreateTrip)

	app.Get("/trip/:tripId", controllers.GetTrip)

	app.Put("/trip/:tripId", controllers.EditTrip)
	app.Delete("/trip/:tripId", controllers.DeleteTrip)

	app.Get("/trips", controllers.GetAllTrips)
}