import express from 'express';
import dotenv from 'dotenv';
import db from './mongoconfig';
import { signup, emailCheck, passwordCheck } from './controllers/signupController';

dotenv.config();

const app = express();
app.use(express.json());
console.log(db);

// declare a route with a response
app.get('/', (req, res) => {
  res.send("Server running");
});

app.post('/signup', emailCheck, passwordCheck, signup);

// start the server
const PORT = process.env.BACK_PORT || 8081;
app.listen(PORT, () => {
  console.log(`server running : http://localhost:${PORT}`);
});

