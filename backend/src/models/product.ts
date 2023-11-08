import { Schema, model, Model, Document } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface IProduct extends Document {
  name: string;
  price: number;
  image: {
    contentType: string;
    fileName: string;
  };
  unit: string;
  expired_date: Date;
  description: string;
  stock: number;
  userId: Schema.Types.ObjectId; // A reference to the farmer schema.
}

// 2. Create a Schema corresponding to the document interface.
const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: {
    contentType: String,
    fileName: String,
  },
  unit: {
    type: String,
    required: true,
    enum: [
      "gram",
      "kilogram",
      "ounce",
      "pound",
      "litre",
      "millilitre",
      "package",
      "bag",
      "bottle",
      "box",
      "can",
      "count",
      "piece",
      "bundle",
      "tray",
      "pint",
      "gallon",
    ], // An enumeration of valid values.
  },
  expired_date: { type: Date, required: true },
  description: { type: String, required: true },
  stock: {
    type: Number,
    required: true,
  },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the User model.
});

// 3. Create a Model.
const Product: Model<IProduct> = model<IProduct>("Product", productSchema);

export { Product, IProduct };
