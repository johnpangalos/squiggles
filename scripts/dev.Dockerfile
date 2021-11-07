FROM golang:1.17.1-alpine

ENV ENTR_INOTIFY_WORKAROUND=true

RUN apk update && apk add entr

WORKDIR /app
COPY go.mod ./
COPY go.sum ./
RUN go mod download