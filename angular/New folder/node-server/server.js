const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Database connection details
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: '123',
  port: 5432,
});

// Connect to database
client.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Connected to database');
  }
});

// API endpoint to handle form data and insert into the database
app.post('/api/signup', (req, res) => {
  const { name, surname } = req.body;

  // SQL query for insertion
  const sql = `INSERT INTO Students (name, surname) VALUES ($1, $2)`;
  const values = [name, surname];

  // Perform the query
  client.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ message: 'Error inserting data' });
    } else {
      console.log('Data inserted successfully');
      res.json({ message: 'Data inserted successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


