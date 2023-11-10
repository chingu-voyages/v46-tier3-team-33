import { Request, Response } from "express";
import { Product } from "../models/product";

const listProductController = async (req: Request, res: Response) => {
  try {
    const { searchType, searchTerm } = req.query;

    const query: { [key: string]: any } = {};
    if (searchType && searchTerm) {
      query[searchType as string] = { $regex: searchTerm, $options: "i" };
    }

    const products = await Product.find(query).populate({
      path: "userId",
      select: "email",
    });

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export default listProductController;
