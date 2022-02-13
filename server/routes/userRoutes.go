package routes

import (
	"passport-api/controllers" //add this

	"github.com/gofiber/fiber/v2"
)

func UserRoute(app *fiber.App) {
	app.Post("/api/user", controllers.Register)
}