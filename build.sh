#!/usr/bin/env bash

# Build the containers using docker compose.
echo "Executing build script"

docker compose -f build.yaml up --build
