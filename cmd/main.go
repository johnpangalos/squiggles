package main

import (
	"fmt"

	fiber "github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()
	app.Get("/api/list", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"success": true})
	})
	fmt.Println("Running on http://localhost:8080")
	app.Listen(":8080")
}
