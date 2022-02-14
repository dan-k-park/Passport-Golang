package routes

import (
	"passport-api/controllers" //add this

	"github.com/gofiber/fiber/v2"
)

func AuthRoute(app *fiber.App) {
	app.Post("/api/login", controllers.Login)
	app.Post("/api/register", controllers.Register)
}