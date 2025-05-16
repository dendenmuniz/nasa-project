FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
COPY client/package*.json client/
COPY server/package*.json server/

RUN npm run install-client --omit=dev
RUN npm run install-server --omit=dev

COPY client/ client/
COPY server/ server/

RUN npm run docker:build --prefix client

USER node

CMD ["npm", "start", "--prefix", "server"]

EXPOSE 8000