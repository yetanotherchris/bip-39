# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Install a simple HTTP server for serving static files
RUN npm install -g serve

# Copy built files from builder stage
COPY --from=builder /app/dist /app/dist

# Expose port 8080
EXPOSE 8080

# Serve the built application
CMD ["serve", "-s", "dist", "-l", "8080"]
