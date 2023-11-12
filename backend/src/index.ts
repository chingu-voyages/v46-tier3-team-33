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
import currentUserProduct from "./controllers/currentUserProduct";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_HOST || "http://localhost:5173", // Allow only this origin
    credentials: true, // Allow cookies
  })
);

// declare a route with a response
app.get("/", (req, res) => {
  res.send("Server running");
});

app.get("/user", jwtVerification, getUserContextController);

app.post("/signup", emailCheck, passwordCheck, signup);

app.post("/login", loginController);

app.post("/logout", logoutController);

app.post(
  "/product",
  jwtVerification,
  upload.single("picture"),
  productCreateController
);

app.get("/product", jwtVerification, productListController);

// Define a route for fetching products specific to the current user
app.get("/product", currentUserProduct);


app.delete("/product/:id", jwtVerification, productDeleteController);

connect().then(() => {
  // start the server
  const PORT = process.env.BACK_PORT || 8081;
  app.listen(PORT, () => {
    console.log(`server running : http://localhost:${PORT}`);
  });
});
