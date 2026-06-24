FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

RUN mkdir -p /app/site && cp -r /app/dist/*/browser/* /app/site/


FROM nginx:1.27-alpine AS serve

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/site /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
