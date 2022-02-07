package responses

import "github.com/gofiber/fiber/v2"

type CountryResponse struct {
	//struct tags make it possible to attach meta-info to corresponding struct properties
	// used to remort json response returned by api
	Status  int        `json:"status"`
	Message string     `json:"message"`
	Data    *fiber.Map `json:"data"`
}