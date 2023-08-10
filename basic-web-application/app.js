var {Client} = require('pg');//import postgree

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
client.connect(function(err){
    if(err){
        //if error
        throw err;
    }else{
        //connect
        console.log('Connected');

        //sql
        var sql = "SELECT * FROM STUDENTS";

        //run select query
        client.query(sql,function(err,result,fields){
            if(err){
                throw err;
            }else{
                console.log(result);
            }
        });
    }
});
