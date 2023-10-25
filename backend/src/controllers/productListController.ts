import { Request, Response } from "express";
import { Product } from "../models/product";

const listProductsController = async (req: Request, res: Response) => {
  try {
    const products = await Product.find().populate({
      path: "farmerId",
      select: "email",
    });

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export default listProductsController;
