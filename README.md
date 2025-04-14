# Remnant From The Ashes (FTA) Save File Viewer

A Vue 3 web application to analyze and visualize campaign/adventure data from `.sav` or `.bak` files used in the game *Remnant From The Ashes (FTA)*.

Originally based on source code by [hzla](https://github.com/hzla). This version includes major refactors, Vue 3 + TypeScript setup, and Docker deployment capabilities.

You can find the original project here: [Remnant-World-Analyzer](https://github.com/hzla/Remnant-World-Analyzer).

---

## 🚀 Features

- Upload `.sav` or `.bak` files directly.
- View campaign and adventure mode data.
- Card-style UI with expandable item/boss descriptions.
- Distinct item parsing and formatting.
- Responsive layout with Bootstrap 5.
- Dockerized deployment-ready.

---

## 🛠️ Project Setup

### Requirements

- Node.js (v16+ recommended)
- npm or yarn

### Install dependencies

```bash
npm install
# or
yarn install
```

### To Run

```bash
npm run dev
# or
yarn dev
```

### To Build

```bash
npm run build
# or
yarn build
```

## Docker

This project includes a pre-built docker file for easy docker deployment.

```dockerfile
# Dockerfile
FROM node:18-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

