import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const mongoDbUrl = 'mongodb://0.0.0.0/vegilicious';
mongoose.connect(mongoDbUrl);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');

  // const model = mongoose.model('Test', new Schema({ name: String }));
  // const doc = new model();
  // doc.name = "Testin insert";

  // doc.save().then(() => {
  //   console.log('saved');
  // }).catch((error) => {
  //   console.log(error);
  // });
});

export default db;