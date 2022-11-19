FROM node:17.7.2
WORKDIR Full-Stack-charlenger-API/src/app
COPY package*.json ./
RUN yarn
COPY . .
ENV NODE_PATH=./src