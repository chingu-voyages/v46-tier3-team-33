import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Farmer } from "../models/farmer";

interface LoginRequestBody {
  email?: string;
  password?: string;
}

const login = async (req: Request<{}, {}, LoginRequestBody>, res: Response) => {
  const { email, password } = req.body;

  // Validate credentials
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Check if farmer exists
    const farmer = await Farmer.findOne({ email }).select("+password");
    if (!farmer) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, farmer.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Ensure JWT_SECRET is available
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET not defined in environment");
    }

    // Create JWT token
    const token = jwt.sign({ farmerId: farmer._id.toString() }, JWT_SECRET, {
      expiresIn: "24h",
    });

    // Set JWT as an HttpOnly, Secure cookie (you can adjust the settings as necessary)
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use this option only in production with HTTPS
      maxAge: 86400000, // Token expiration, here it's set to 24 hour
    });

    res.status(200).json({ message: "Logged in successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export default login;
