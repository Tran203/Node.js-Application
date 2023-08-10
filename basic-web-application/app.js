var { Client } = require('pg');//import postgree
var express = require('express');//import express
var app = express();//initialise
var serverPort = 3000;

//databse connection details
var client = new Client({
    //details
    user: 'postgres',
    host: 'localhost',
    database: 'test', // database name
    password: '123',
    port: 5432, // PostgreSQL port
});

//connect
client.connect(function (err) {
    if (err) {
        //if error
        throw err;
    } else {
        //connected
        console.log('Connected');

        //route management
        app.get('/', (req, res) => {
            //sql
            var sql = "SELECT * FROM STUDENTS";

            //run select query
            client.query(sql, function (err, result, fields) {
                if (err) {
                    throw err;
                } else {
                    //return
                    res.json(result.rows);
                }
            });

        });


        //server runs
        app.listen(serverPort, () =>{
            console.log(`Server is running on port ${serverPort}`);
        });
    }
});
