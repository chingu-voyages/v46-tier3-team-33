import express from "express";
import dotenv from "dotenv";
import connect from "./mongoconfig";
import cookieParser from "cookie-parser";
import {
  signup,
  emailCheck,
  passwordCheck,
} from "./controllers/signupController";
import loginController from "./controllers/loginController";
import logoutController from "./controllers/logoutController";
import cors from "cors"; // Import the cors middleware

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors()); // Use the cors middleware

// declare a route with a response
app.get("/", (req, res) => {
  res.send("Server running");
});

app.post("/signup", emailCheck, passwordCheck, signup);

app.post("/login", loginController);

app.post("/logout", logoutController);

connect().then(() => {
  // start the server
  const PORT = process.env.BACK_PORT || 8081;
  app.listen(PORT, () => {
    console.log(`server running : http://localhost:${PORT}`);
  });
});
