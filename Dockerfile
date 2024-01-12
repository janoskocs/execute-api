# Fetching the minified node image on apline linux
FROM node:slim

WORKDIR /app

COPY package*.json ./
COPY . .
RUN npm install nodemon -g
RUN npm install

CMD ["npm", "run", "dev"]