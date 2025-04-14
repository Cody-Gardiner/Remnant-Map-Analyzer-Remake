# Step 1: Build the app
FROM node:18-alpine AS build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Serve the built app with nginx
FROM nginx:stable-alpine AS production-stage

# Copy the built assets from the build stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy a custom nginx config (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
