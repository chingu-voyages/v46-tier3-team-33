import { Schema, model, Model, Document } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface IProduct extends Document {
  name: string;
  price: number;
  img?: any; // We'll use 'any' type for now since it's not confirmed how to implement this attribute.
  unit: string;
  expired_date: Date;
  description: string;
  stock: number;
  farmerId: Schema.Types.ObjectId; // A reference to the farmer schema.
}

// 2. Create a Schema corresponding to the document interface.
const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: Schema.Types.Mixed }, // Used Mixed type for now due to uncertainty.
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
  farmerId: { type: Schema.Types.ObjectId, ref: "Farmer", required: true }, // Reference to the Farmer model.
});

// 3. Create a Model.
const Product: Model<IProduct> = model<IProduct>("Product", productSchema);

export { Product, IProduct };
