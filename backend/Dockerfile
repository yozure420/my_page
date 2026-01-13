FROM oven/bun:1.1-slim
WORKDIR /app
COPY package.json bun.lockb* ./
RUN bun install
COPY . .
EXPOSE 5000
CMD ["bun", "run", "index.ts"]