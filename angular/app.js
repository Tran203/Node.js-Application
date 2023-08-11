const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/submit', (req, res) => {
  const receivedData = req.body;
  console.log('Received data:', receivedData);

  // Handle the data on the server as needed

  // Now, let's display the received data in the console
  console.log('Name:', receivedData.name);
  console.log('Surname:', receivedData.surname);

  // Send a response back to the client
  res.status(200).json({ message: 'Data received on the server', data: receivedData });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
