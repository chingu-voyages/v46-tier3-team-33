// currentUserProductController
import { Request, Response } from "express";
import { Product } from "../models/product";
import mongoose from "mongoose";

  const currentUserProduct = async (req: Request, res: Response) => {
    try {
      const currentUserId = req.query;

    const query: { [key: string]: any } = {};
    if (!currentUserId) {
      query[searchType as string] = { $regex: searchTerm, $options: "i" };
    }
      console.log("Backend current user", currentUserId)

      // Validate currentUser
      if (!currentUserId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
     // Convert the userID to a Mongoose ObjectId
      // const userIdObject = new mongoose.Types.ObjectId(currentUserId);

      // Use direct match on userId
      const products = await Product.find({ userId: currentUserId });

      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };


export default currentUserProduct;