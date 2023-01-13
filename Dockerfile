FROM node:16.19.0-bullseye-slim

WORKDIR /app


ADD . .

RUN npm install


CMD npm run dev