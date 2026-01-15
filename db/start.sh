#!/bin/bash

if [ ! -f ".env" ]; then
    echo "A .env fájl még nem létezik"
    cp .env.example .env
fi

docker compose up -d
