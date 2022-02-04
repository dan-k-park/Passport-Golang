package main

import (
	"passport-api/configs"
	"passport-api/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	configs.ConnectDB()

	routes.TripRoute(app)
	routes.UserRoute(app)

	app.Listen(":4000")
}