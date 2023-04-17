//Build project\
npm run build

//Docker
docker run --network=host -dp 3000:3000 start
mysql port 3306

//Swagger api\


## Installation

Install modules

```bash
  npm install
```

## Run project

Parallel: if you want more server config in package.json

```bash
    npm run dev
```

Separate: if you want more server config in package.json

```bash
    npm run animal-serve (or more server)
```

## Run script database

Config database properties in .env file\
Config type of database in /env/connect.database.ts and /env/database.cjs in property name dialect

Migrate command

```bash
    npm run migrate
```

Create new migration

```bash
  npm run new-migration (name)
```

Seed command

```bash
  npm run seed
```

Create new seed

```bash
  npm run new-seed (name)
```

## API Reference

#### Swagger

```http
  GET /apis
```

## Structure

- Common: static function, enum, static class, json
- Config: db, network
- Constroller: handle request and response
- Crawl: crawl all data from database to xlsx for expand or rebuild in future
- Db: handle db migration and seed
- Declare: declare module, function, ...
- Entities: Map fields in table in database
- Files: store file in hardware
- Middleware: (middle man)
- Model: type of variable
- Route: routers
- Server: servers
- Service: business logic handling
- Test: testing
- Validators: validation rules

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`ANIMAL_PORT`

`ROOT_DOMAIN`

`DB_HOST`
`DB_USER`
`DB_PASSWORD`
`DB_NAME`
`DB_TIMEZONE`

`PRIVATE_TOKEN`
`SECRET_TOKEN`

## Authors

- [@DuongDucAnh](https://www.github.com/octokatherine)

## 🚀 About Me

Hi, I'm Dương Đức Anh! 👋, I'm a fullstack developer. This is the first default project I built in college. Its free, so you can use it for learning. But not for business. Thank you all!

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
