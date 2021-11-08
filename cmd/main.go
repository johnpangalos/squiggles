package main

import (
	"log"
	// "os"
	// "context"

	fiber "github.com/gofiber/fiber/v2"

	"github.com/joho/godotenv"
	// fb "firebase.google.com/go/v4"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// serviceAccountBase64 := os.Getenv("SERVICE_ACCOUNT")
	// ctx := context.Background()
	// fb.NewApp(ctx, )

	app := fiber.New()
	app.Get("/api/list", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"success": true})
	})
	log.Printf("Running on http://localhost:8080")
	app.Listen(":8080")
}
