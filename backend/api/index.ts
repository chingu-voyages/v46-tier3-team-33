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

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

// declare a route with a response
app.get("/api", (req, res) => {
  res.send("Server running");
});

app.post("/api/signup", emailCheck, passwordCheck, signup);

app.post("/api/login", loginController);

app.post("/api/logout", logoutController);

connect().then(() => {
  console.log("connected to database");
  //   // start the server
  //   const PORT = process.env.BACK_PORT || 8081;
  //   app.listen(PORT, () => {
  //     console.log(`server running : http://localhost:${PORT}`);
  //   });
});

module.exports = app;