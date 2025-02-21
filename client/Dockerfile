# Use Node.js LTS version
FROM node:20-alpine

# Set working directory
WORKDIR /client

# Copy package.json and package-lock.json
COPY package*.json ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the app files
COPY . .

# Expose the frontend port
EXPOSE 3000

# Start the frontend server
CMD ["npm", "run", "dev"]
