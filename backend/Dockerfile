FROM golang:1.16-alpine

RUN apk update && apk add entr make

WORKDIR /go/src/app
COPY . .

RUN make deps

CMD ["./scripts/dev.sh"]
