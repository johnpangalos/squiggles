deps:
	go get -d ./...

dev:
	docker compose -f scripts/docker-compose.yml up	--build

dev/clean:
	docker compose -f scripts/docker-compose.yml down	

generate_key:
	printf %s SERVICE_ACCOUNT= >> .env.local
	sh -c "docker run --rm -v $(SERVICE_ACCOUNT):/service-account.json alpine base64 -w 0 /service-account.json" >> .env.local
