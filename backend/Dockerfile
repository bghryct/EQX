# gcr.io/eqx-host/backend:<hash>

FROM strapi/base:12

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run-script build

CMD [ "npm", "run", "dev" ]
