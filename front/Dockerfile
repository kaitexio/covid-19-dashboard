FROM node:13.8.0-stretch
RUN mkdir /front
WORKDIR /front
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .