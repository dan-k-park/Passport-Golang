package main

import (
	"passport-api/configs"
	"passport-api/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

app.Use(cors.New())

app.Use(cors.New(cors.Config{
	AllowOrigins:     "*",
	AllowMethods:     "GET,POST,HEAD,PUT,DELETE,PATCH",
	AllowHeaders:  "Origin, Content-Type, Accept",
   
}))

	configs.ConnectDB()
	
	routes.TripRoute(app)
	routes.AuthRoute(app)
	routes.UserRoute(app)
	routes.CountryRoute(app)

	// seed.Load()
	app.Listen(":4000")
}