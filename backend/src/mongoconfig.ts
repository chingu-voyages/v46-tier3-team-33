import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const mongoDbUrl = process.env.MONGODB_URL || "mongodb://0.0.0.0/vegilicious";

const connect = async () => {
  try {
    await mongoose.connect(mongoDbUrl);
    console.log("Connected to MongoDB");
    const db = mongoose.connection;
    return db;
  } catch (error) {
    console.log("Unable to connect to Mongodb", error);
    throw error;
  }
};

export default connect;
