# build env
FROM node:12-alpine as build
WORKDIR /app
COPY ./front/package*.json ./
RUN npm install
COPY ./front/ ./
RUN npm run build

# production env
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]