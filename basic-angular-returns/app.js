const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Client } = require('pg'); // Import the PostgreSQL Client

const app = express();
const port = 3000;

// Database connection details
const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: '123',
  port: 5432,
};

app.use(bodyParser.json());
app.use(cors());

app.post('/api/submit', async (req, res) => {
  const receivedData = req.body;//get data
  console.log('Received data:', receivedData);

  
  const dbClient = new Client(dbConfig); // Create a new client for this request

  try {
    // Connect to the database
    await dbClient.connect();
    console.log('Connected to database');

    // SQL query to insert data
    const sql = 'INSERT INTO Students (name, surname) VALUES ($1, $2)';
    const values = [receivedData.name, receivedData.surname];

    // Execute the query
    await dbClient.query(sql, values);
    console.log('Data inserted into database');

    // Send a response back to the client
    res.status(200).json({ message: 'Data received and inserted into the database' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error inserting data into the database' });
  } finally {
    // Disconnect from the database
    await dbClient.end();
    console.log('Disconnected from database');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
