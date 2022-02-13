package routes

import (
	"passport-api/controllers" //add this

	"github.com/gofiber/fiber/v2"
)

func TripRoute(app *fiber.App) {
	app.Post("/api/trip", controllers.CreateTrip)

	app.Get("/api/trip/:tripId", controllers.GetTrip)

	app.Put("/api/trip/:tripId", controllers.EditTrip)
	app.Delete("/api/trip/:tripId", controllers.DeleteTrip)

	app.Get("/api/trips", controllers.GetAllTrips)
}