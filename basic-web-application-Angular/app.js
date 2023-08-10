const { Client } = require('pg');
const express = require('express');
const app = express();
const serverPort = 3000;

// Database connection details
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'test', // Database name
  password: '123',
  port: 5432, // PostgreSQL port
});

// Connect to the database
client.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    process.exit(1); // Exit the application on database connection error
  } else {
    console.log('Connected to the database');

    // Define a route to fetch data from the database
    app.get('/', (req, res) => {
      // SQL query to retrieve data from the STUDENTS table
      const sql = 'SELECT * FROM STUDENTS';

      // Run the SELECT query
      client.query(sql, (err, result) => {
        if (err) {
          console.error('Error executing query:', err.stack);
          res.status(500).send('Error');
        } else {
          // Send the query result as JSON response
          res.json(result.rows);
        }
      });
    });

    // Start the server
    app.listen(serverPort, () => {
      console.log(`Server is running on port ${serverPort}`);
    });
  }
});
