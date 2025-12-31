# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app

# Install deps first (better caching)
COPY package*.json ./
RUN npm ci

# Copy app source and build
COPY . .
RUN npm run build

# --- Run stage ---
FROM node:20-alpine
WORKDIR /app

# Install a tiny static server
RUN npm i -g serve

# Copy built files only
COPY --from=build /app/dist ./dist

# Cloud Run listens on 8080
EXPOSE 8080

# Serve the static site
CMD ["serve", "-s", "dist", "-l", "8080"]
