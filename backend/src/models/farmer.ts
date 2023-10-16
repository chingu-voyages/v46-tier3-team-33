import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IFarmer {
  email: string;
  password: string;
}

// 2. Create a Schema corresponding to the document interface.
const farmerSchema = new Schema<IFarmer>({
  email: { type: String, required: true },
  password: { type: String, required: true }
})

// 3. Create a Model.
const Farmer = model<IFarmer>('Farmers', farmerSchema);

export { Farmer };