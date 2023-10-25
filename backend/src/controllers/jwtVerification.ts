import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

const jwtVerification = (req: Request, res: Response, next: NextFunction) => {
  // Get token from cookies
  const token = req.cookies.token;

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: "No token provided, unauthorized" });
  }

  // Ensure JWT_SECRET is available
  const JWT_SECRET = process.env.JWT_SECRET;
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET not defined in environment");
  }

  try {
    // Verify token
    interface DecodedToken {
      farmerId: string;
      iat?: number; // issued at
      exp?: number; // expiration time
    }

    const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;
    res.locals.farmerId = decoded.farmerId;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid token, unauthorized" });
  }
};

export default jwtVerification;
