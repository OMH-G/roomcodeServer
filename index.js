// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root endpoint
app.get('/roomCode', (req, res) => {
  const min = 100;
    const max = 99999999;

    const random8DigitNumber =
      Math.floor(Math.random() * (max - min + 1)) + min;

    const RoomCode = String(random8DigitNumber).padStart(8, "0");
    console.log('asldkfsal',RoomCode)
  res.send({'message':RoomCode});
});

// Specify the port number for the server to listen on
const port = 3001;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
