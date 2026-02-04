# ========================
# Frontend build stage
# ========================
FROM node:18-alpine AS frontend-build

WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


# ========================
# Backend stage
# ========================
FROM node:18-alpine

WORKDIR /app

# Copy backend files
COPY backend/package*.json ./
RUN npm install
COPY backend/ .

# Copy frontend build into backend public folder
COPY --from=frontend-build /frontend/dist ./public

EXPOSE 5000

CMD ["node", "index.js"]
