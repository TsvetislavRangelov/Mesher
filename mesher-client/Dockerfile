
FROM node:lts-alpine AS build
ARG NODE_ENV

ENV NODE_ENV $NODE_ENV

WORKDIR /app

COPY package*.json ./


RUN npm ci

COPY . .

RUN npm run build

FROM nginx:stable-alpine AS final
LABEL org.opencontainers.image.source=https://github.com/TsvetislavRangelov/mesher
LABEL org.opencontainers.image.description="Mesher Web Client"

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
