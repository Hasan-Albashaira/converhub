# Stage 1: Install dependencies
FROM node:22-slim AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Stage 2: Build Next.js
FROM node:22-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN NODE_OPTIONS="--max-old-space-size=1536" npm run build

# Stage 3: Production image
FROM node:22-slim AS runner
WORKDIR /app

# Install LibreOffice + Java (Office↔PDF) + Python + pdf2docx + fonts
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
      libreoffice \
      default-jre-headless \
      fonts-liberation \
      fonts-freefont-ttf \
      python3 \
      python3-pip \
    && pip3 install --no-cache-dir --break-system-packages pdf2docx \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts

EXPOSE 8080
CMD ["npm", "start"]
