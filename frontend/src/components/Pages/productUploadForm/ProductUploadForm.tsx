import { useState } from "react";

interface FormValues {
  name: string;
  picture: File | null;
  description: string;
  postcode: string;
  price: number;
  quantityOfUnit: number;
  unitOfMeasure: string;
  expiryDate: string;
  quantityAvailable: number;
  availabilityTime: string;
}

export default function ProductUploadForm() {
  return (
    <form>
      <input type="text" name="name" placeholder="Your Name" />
      <input type="file" name="picture" />
      <textarea name="description" placeholder="Describe your produce" />
      <input type="text" name="postcode" placeholder="Postcode" />
      <input type="number" name="price" placeholder="Price in £" />
      <input type="number" name="quantity" placeholder="Quantity of item" />
      <input
        type="number"
        name="unit of measure"
        placeholder="kg? lb? items?"
      />
    </form>
  );
}
