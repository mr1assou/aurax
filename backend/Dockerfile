# # Use Node.js 22 with Alpine for a smaller image
# FROM node:22-alpine

# # Set working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json first (for better caching)
# COPY package.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the frontend files
# COPY . ./

# CMD ["npm","run","dev"]



# Stage 1: Build Stage for TypeScript
FROM node:22-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm install

# Copy all the app files
COPY . ./

# Compile TypeScript files to JavaScript
RUN npm run build  

# Stage 2: Production Stage
FROM node:22-alpine AS production

# Set working directory
WORKDIR /app

# Copy compiled JavaScript from the build stage
COPY --from=build /app/dist /app/dist
COPY --from=build /app/assets /app/assets
# Install production dependencies
COPY package*.json ./
RUN npm install --only=production

# Expose the port that Express will run on
EXPOSE 3001

# Start the app
CMD ["node", "dist/server.js"] 
