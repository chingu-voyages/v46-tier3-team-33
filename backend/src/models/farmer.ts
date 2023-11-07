import { Schema, model, Model, Document } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface IFarmer extends Document {
  email: string;
  password: string;
  isFarmer: boolean;
}

// 2. Create a Schema corresponding to the document interface.
const farmerSchema = new Schema<IFarmer>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  isFarmer: { type: Boolean, required: true },
});

// 3. Create a Model.
const Farmer: Model<IFarmer> = model<IFarmer>("Farmer", farmerSchema);

export { Farmer, IFarmer };
