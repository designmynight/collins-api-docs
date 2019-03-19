FROM node:11-alpine

WORKDIR /app
VOLUME /app

RUN npm install -g live-server

EXPOSE 8080

ENTRYPOINT [ "live-server" ]