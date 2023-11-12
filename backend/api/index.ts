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
import getUserContextController from "./controllers/getUserContextController";

import jwtVerification from "./controllers/jwtVerification";
import productCreateController from "./controllers/productCreateController";
import productListController from "./controllers/productListController";

import cors from "cors"; // Import the cors middleware
import upload from "./multerSetup";
import multer from "multer";
import productDeleteController from "./controllers/productDeleteController";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [""],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

// declare a route with a response
app.get("/api", (req, res) => {
  res.send("Server running");
});

app.get("/api/user", jwtVerification, getUserContextController);

app.post("/api/signup", emailCheck, passwordCheck, signup);

app.post("/api/login", loginController);

app.post("/api/logout", logoutController);

app.post(
  "/api/product",
  jwtVerification,
  upload.single("picture"),
  productCreateController
);

app.get("/api/product", jwtVerification, productListController);

app.delete("/api/product/:id", jwtVerification, productDeleteController);

app.listen(8081, () => {
  console.log("Server is Running");
});
