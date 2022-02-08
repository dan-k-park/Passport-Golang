package routes

import (
	"passport-api/controllers" //add this

	"github.com/gofiber/fiber/v2"
)

func TripRoute(app *fiber.App) {
	app.Post("/login", controllers.Login)
}