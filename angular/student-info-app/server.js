// server.js

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

// Connect to the database
client.connect();

// API endpoint to insert student information
app.post('/api/students', (req, res) => {
  const { name, surname } = req.body;
  const sql = 'INSERT INTO Students(name, surname) VALUES ($1, $2)';
  const values = [name, surname];

  client.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting student:', err);
      res.status(500).json({ error: 'Error inserting student' });
    } else {
      console.log('Student inserted successfully');
      res.status(200).json({ message: 'Student inserted successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
