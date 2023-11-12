import { Request, Response } from "express";
import { Product } from "../models/product";

interface ProductCreateRequestBody {
  name: string;
  image: File | null;
  description: string;
  postcode: string;
  price: number;
  stock: number;
  unit: string;
  expiryDate: string;
  availabilityTime: string;
}

const productCreateController = async (
  req: Request<{}, {}, ProductCreateRequestBody>,
  res: Response
) => {
  if (!req.file) return res.status(400).json({ message: "Picture required" });
  const { name, price, postcode, unit, expiryDate,availabilityTime, description, stock } = req.body;

  try {
    const product = await Product.create({
      name,
      price,
      image: {
        fileName: req.file.filename,
        contentType: req.file.mimetype,
      },
      unit,
      expiryDate,
      description,
      stock,
      postcode,
      availabilityTime,
      userId: res.locals.user.userID,
    });
    res.status(200).json({ message: "Product created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export default productCreateController;
