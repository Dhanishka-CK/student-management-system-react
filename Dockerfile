FROM node:22-alpine AS build

# Force a fresh application build
ARG BUILD_VERSION=2

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM scratch

COPY --from=build /app/dist