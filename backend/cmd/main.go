package main

import "github.com/gofiber/fiber"

func main() {
	app := fiber.New()
	app.Get("/api/list", func(c *fiber.Ctx) {
		c.SendString("I'm a GET request!")
	})
	app.Listen(":8080")
}
