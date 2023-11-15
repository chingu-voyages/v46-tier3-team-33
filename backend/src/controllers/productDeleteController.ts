// import { Response, Request } from "express";
// import { Product } from "../models/product";

// const deleteProductController = async (req: Request, res: Response) => {
//   try {
//     const { _id } = req.params;
//     console.log("Backend item id:", _id)
//     await Product.findByIdAndDelete(_id);
//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// export default deleteProductController;

import { Request, Response } from "express";
import { Product } from "../models/product";

const productDeleteController = async (
  req: Request<{ productId: string }, {}, {}>,
  res: Response
) => {
  const productId = req.params.productId;

  try {
    // Assuming you have a method like findByIdAndDelete in your Product model
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Optionally, you might want to delete the associated image file from your storage

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export default productDeleteController;
