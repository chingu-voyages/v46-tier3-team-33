// currentUserProductController
import { Request, Response } from "express";
import { Product } from "../models/product";

const currentUserProductController = async (req: Request, res: Response) => {
  try {
    const currentUser = req.query; // Assuming user information is available in the request
    
    const query: { [key: string]: any } = {};
      query[currentUser.email as string] = { $regex: currentUser, $options: "i" };
    
    if (!currentUser) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const products = await Product.find({ userId: currentUser._id });

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export default currentUserProductController;