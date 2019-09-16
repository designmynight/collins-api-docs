FROM node:11-alpine

WORKDIR /app
VOLUME /app

RUN npm install -g live-server

EXPOSE 5050

ENTRYPOINT [ "live-server", "--port=5050" ]