# develop stage
FROM node:lts-slim as develop-stage
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .