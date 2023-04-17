//run project\
    parallel: npm run dev (if you want more server config in package.json)\
    separate: npm run animal-serve (or more server)

//build project\
npm run build

//docker
docker run --network=host -dp 3000:3000 start
mysql port 3306

//database\
config database properties in .env file\
config type of database in /env/connect.database.ts and /env/database.cjs in property name dialect\
    + migrate command: npm run migrate\
    + create new migration: npm run new-migration (name)\
    + seed command: npm run seed\
    + create new seed: npm run new-seed (name)

//swagger api\
ROOT_DOMAIN:PORT/api

//Src

//no copyright
author: Duong Duc Anh\
gmail: duongdoican@gmail.com\
facebook: https://www.facebook.com/ST.LGZ/
