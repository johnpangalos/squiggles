#!/bin/sh
set -x

pid=0

my_handler() {
  echo "my_handler"
}

term_handler() {
  if [ $pid -ne 0 ]; then
    kill -SIGTERM "$pid"
    wait "$pid"
  fi
  exit 143
}

trap 'kill ${!}; my_handler' SIGUSR1
trap 'kill ${!}; term_handler' SIGTERM

pid="$!"

while true
do
  find . -name '*.go' | entr -n -r -c -d make run & wait ${!}
done

