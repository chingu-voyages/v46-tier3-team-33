import { Request, Response } from "express";
import { Product } from "../models/product";

interface ProductCreateRequestBody {
  name: string;
  price: number;
  img?: any; // you may want to refine this type later based on how images are handled
  unit: string;
  expired_date: Date;
  description: string;
  stock: number;
}

const productCreateController = async (
  req: Request<{}, {}, ProductCreateRequestBody>,
  res: Response
) => {
  const { name, price, img, unit, expired_date, description, stock } = req.body;

  try {
    const product = await Product.create({
      name,
      price,
      img,
      unit,
      expired_date,
      description,
      stock,
      farmerId: res.locals.farmerId,
    });
    res.status(200).json({ message: "Product created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export default productCreateController;
