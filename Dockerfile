FROM node:24.8.0

WORKDIR /app

COPY package.json package-lock.json ./

COPY . .