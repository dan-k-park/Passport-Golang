package main

import (
	"passport-api/configs"
	"passport-api/routes"
	"passport-api/seed"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	configs.ConnectDB()

	
	routes.TripRoute(app)
	routes.UserRoute(app)
	routes.CountryRoute(app)
	
	seed.Load()
	app.Listen(":4000")
}