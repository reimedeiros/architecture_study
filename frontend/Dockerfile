FROM node:22 AS build

WORKDIR /app

RUN npm install -g npm@10.9.4

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


FROM nginx:alpine

RUN apk add --no-cache gettext

COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

COPY docker-entrypoint.sh /docker-entrypoint.sh

RUN chmod +x /docker-entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]