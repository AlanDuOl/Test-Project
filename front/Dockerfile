FROM node:12-alpine as builder
COPY ./front/package*.json ./
RUN npm install && mkdir /front && mv ./node_modules ./front
WORKDIR /front
COPY ./front/ ./
RUN npm run build

FROM nginx:1.16.0-alpine
COPY --from=builder /front/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./front/nginx.conf /etc/nginx/conf.d
CMD ["nginx", "-g", "daemon off;"]