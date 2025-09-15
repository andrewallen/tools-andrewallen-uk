# syntax=docker/dockerfile:1

############################
# Build stage
############################
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies using lockfile
COPY package*.json ./
RUN npm ci

# Copy the rest of the source and build
COPY . .
RUN npm run build

############################
# Runtime stage (static hosting)
############################
FROM nginx:alpine AS runner

# Replace default Nginx site with SPA-friendly config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

# Nginx runs as non-root user by default in the alpine image
# (user is defined in /etc/nginx/nginx.conf). No CMD override needed.

