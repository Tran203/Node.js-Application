const express = require('express');//import express
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the 'cors' middleware

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

app.post('/api/submit', (req, res) => {
  const receivedData = req.body;
  console.log('Received data:', receivedData);

  // Handle the data on the server as needed
  console.log('Name:', receivedData.name);
  console.log('Surname:', receivedData.surname);

  // Send a response back to the client
  res.status(200).json({ message: 'Data received on the server', data: receivedData });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
