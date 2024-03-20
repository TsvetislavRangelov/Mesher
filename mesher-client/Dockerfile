# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.19.0

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as base

# Set working directory for all build stages.
WORKDIR /usr/src/client
EXPOSE 3000 
# Development environment.
FROM base as final
LABEL org.opencontainers.image.source=https://github.com/TsvetislavRangelov/mesher
LABEL org.opencontainers.image.description="Mesher Web Client"

COPY . .

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev
    
CMD npm run dev
