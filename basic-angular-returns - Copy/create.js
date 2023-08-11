const { Client } = require('pg');//import postgreSQL

// Create a new PostgreSQL client
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'test', // database name
    password: '123',
    port: 5432, // PostgreSQL port
});

//connect
client.connect(function (err) {
    //if can't connect
    if (err) {
        throw err;
    } else {
        console.log('Connected to Test Database');
    }


    //sql
    var sql = "Create Table Students(name VARCHAR(50), surname VARCHAR(50))";

    //create table function
    client.query(sql, function (err, result) {
        //if cant create
        if (err) {
            throw err;
        } else {
            //create
            console.log('Table created');
        }
    });
});
