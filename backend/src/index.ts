import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// declare a route with a response
app.get('/', (req, res) => {
  res.send("Server running");
});

// start the server
app.listen(8081, () => {
  console.log(`server running : http://localhost:8081`);
});