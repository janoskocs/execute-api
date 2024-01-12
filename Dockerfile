# Fetching the minified node image on apline linux
FROM node:slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install nodemon -g

CMD ["npm", "run", "dev"]