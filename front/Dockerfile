FROM node:12-alpine
WORKDIR /app
EXPOSE 80
ENV NODE_ENV=development
COPY ./front/package*.json ./
RUN npm install --development
COPY ./front/ ./
CMD ["npm", "start"]