//Run project\
parallel: npm run dev (if you want more server config in package.json)\
separate: npm run animal-serve (or more server)

//Build project\
npm run build

//Docker
docker run --network=host -dp 3000:3000 start
mysql port 3306

//Database\
config database properties in .env file\
config type of database in /env/connect.database.ts and /env/database.cjs in property name dialect\
    + migrate command: npm run migrate\
    + create new migration: npm run new-migration (name)\
    + seed command: npm run seed\
    + create new seed: npm run new-seed (name)

//Swagger api\
ROOT_DOMAIN:PORT/api

//Structure\
+ Common: static function, enum, static class, json\
+ Config: db, network\
+ Constroller: handle request and response\
+ Crawl: crawl all data from database to xlsx for expand or rebuild in future\
+ Db: handle db migration and seed\
+ Declare: declare module, function, ...\
+ Entities: Map fields in table in database\
+ Files: store file in hardware\
+ Middleware: (middle man)\
+ Model: type of variable\
+ Route: routers\
+ Server: servers\
+ Service: business logic handling\
+ Test: testing\
+ Validators: validation rules\

//No copyright\
Author: Duong Duc Anh\
Gmail: duongdoican@gmail.com\
Facebook: https://www.facebook.com/ST.LGZ/
