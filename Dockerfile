# Use Docker's Node Alpine Linux image as the base Image
FROM node:18-alpine AS base

# Set the working directory inside the container
WORKDIR /app

# Copy `package.json` & `package-lock`.json to the root folder 
COPY package*.json ./

# Install the node module dependencies
RUN npm install

# Copy everything else
COPY . . 

# Build the Next.js app
RUN npm run build

# Set the environment
ENV NODE_ENV=production
ENV NEXT_PUBLIC_EMAIL=dockerfile-NEXT_PUBLIC_EMAIL
ENV email=dockerfile-email

# Expose the port Next.js needs
EXPOSE 3000

# Run the server!
CMD ["npm", "start"]