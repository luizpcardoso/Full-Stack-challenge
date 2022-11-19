FROM node:16.10.0
ENV NODE_ENV development
WORKDIR charllenger-front/src/App
COPY package*.json ./
COPY yarn.lock .
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]


