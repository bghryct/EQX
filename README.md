# EQX

#Demo

**Frontend**: http://34.73.108.93/

**Backend**: http://35.231.157.252/admin/


# Development
<!-- 
## Post Setup Quickstart

cd frontend && killall -9 node && npm run dev
cd backend && npm run develop -->


**Frontend**: [http://localhost:3000](http://localhost:3000)

**Backend**: [http://localhost:1337](http://localhost:1337)

You can develop using docker-compose or through node.js on your local machine.

## 1. Docker-Compose

To develop using docker-compose

```bash
docker-compose up 
# Timeout issues? COMPOSE_HTTP_TIMEOUT=200 docker-compose up
# Still not working? docker-compose build --no-cache
```
<!-- 
## 2. Local Development

To develop using node.js without docker.

_NOTE_: Please make sure to use Node 10 or more.

### Frontend Server (Next)

```bash
cd frontend
npm install
killall -9 node # Port in use?
npm run dev
```

### Backend Server (Strapi)

We are using SQLite since its easier and can be easily swapped out for Postgres on launch/prod.

```bash
cd backend
npm install
npm start # or npm run develop
``` -->

<!--
## Starting Backend Server (Strapi) for Production

Requirements: Have Postgres installed and running on your machine.

Brew? Follow this. https://www.robinwieruch.de/postgres-sql-macos-setup

```bash
createdb eqx
```

otherwise.. install PostgreSQL yourself. https://www.postgresql.org/download/ and create a PostgreSQL database as specified in database.json.

```json
"client": "postgres",
"host": "127.0.0.1",
"port": "5433",
"database": "eqx",
"username": "postgres",
"password": "postgres"
```

Start Backend

```bash
cd backend
npm install
strapi start
```
 -->

# Stack

Google's OFFICIAL Material Components
https://github.com/material-components/material-components-web-react

NextJS for the frontend framework
https://github.com/zeit/next.js

Strapi for the Headless CMS
https://github.com/strapi/strapi

SQLite for the Dev Database
https://www.postgresql.org/download/

PostgreSQL for the Prod Database
https://www.postgresql.org/download/



# Resources

## Tutorials

Strapi and Next
https://blog.strapi.io/strapi-next-setup/

What is the _app.js File?
https://nextjs.org/docs/#custom-app




# To Do

Remove reactstrap and bootstrap

# Secrets

We use [kubesec](https://github.com/shyiko/kubesec) and Google Cloud KMS to store encrypted secrets in this repo.

To add a new secret, first decrypt, then add secret, and then encrypt. 

## Secret Encryption

```
gcloud auth application-default login
kubesec encrypt -i --key=gcp:projects/eqx-host/locations/us-east1/keyRings/eqx/cryptoKeys/kubernetes-secrets base/secrets.yaml
```

## Secret Decryption

 ```
 gcloud auth application-default login
 kubesec decrypt -i base /secrets.yaml
 ```


