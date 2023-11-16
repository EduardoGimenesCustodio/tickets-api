FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install --production
CMD ["node", "src/main.js"]
EXPOSE 3000