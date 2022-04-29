FROM node:16

RUN mkdir -p /app

WORKDIR /app

RUN npm install -g nodemon

COPY package.json /app

RUN npm install

COPY . /app

COPY .env /app

EXPOSE 3000

CMD [ "npm", "start" ]