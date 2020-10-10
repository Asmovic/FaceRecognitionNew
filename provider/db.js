
const knex = require('knex')

let db = null;

function connection() {
    // console.log(process.env.DATABASE_URL);
    const database =knex({ 
        client: 'pg',
        connection : process.env.DATABASE_URL,
        // connection: {
        //   ssl : true
        //   host : process.env.DB_HOST,
        //   user : process.env.DB_USER,
        //   password : process.env.DB_PASSWORD,
        //   database : process.env.DB_DB 
        // }
    });

    return database;
}

function connect() {
    if(!db) db = connection();

    return db;
}


module.exports = connect();
