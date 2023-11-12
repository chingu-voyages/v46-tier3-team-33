// currentUserProductController
import { Request, Response } from "express";
import { Product } from "../models/product";
import mongoose from "mongoose";

  const currentUserProduct = async (req: Request, res: Response) => {
    try {
      const currentUserId = req.query.userId;

      console.log("Backend current user", currentUserId)

      // Validate currentUser
      if (!currentUserId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      // Convert string ID to ObjectId so it can be directly compared with DB
      const objectIdUserId = new mongoose.Types.ObjectId(currentUserId as string);

      // Use direct match on userId
      const products = await Product.find({ userId: objectIdUserId }).populate({
        path: "userId",
        select: "email",
      });


      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };


export default currentUserProduct;