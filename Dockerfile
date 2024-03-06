# Fetching the minified node image on apline linux
FROM node:slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g nodemon

COPY . .

CMD ["npm", "run", "dev"]