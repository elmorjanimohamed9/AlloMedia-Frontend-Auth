# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install a simple HTTP server to serve the static files
RUN npm install

# Set the command to run the application
CMD ["npm", "run", "dev"]

# Expose the port the app runs on
EXPOSE 5173