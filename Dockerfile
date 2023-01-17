FROM node:16.19.0-bullseye-slim

WORKDIR /app


ADD . .

RUN npm config set -g production false 
RUN npm install


CMD npm run dev