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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formValues);
  };
  return (
    <form>
      <input type="text" name="name" placeholder="Your Name" />
      <input type="file" name="picture" />
      <textarea name="description" placeholder="Describe your produce" />
      <input type="text" name="postcode" placeholder="Postcode" />
      <input type="number" name="price" placeholder="Price in £" />
      <input type="number" name="quantity" placeholder="Quantity of item" />
      <label htmlFor="unitOfMeasure"> Unit of Measure </label>
      <select id="unitOfMeasure" name="unitOfMeasure">
        <option value="g"> Gram (g)</option>
        <option value="kg"> Kilogram (kg)</option>
        <option value="oz"> Ounce (oz)</option>
        <option value="lb"> Pound (lb)</option>
        <option value="ml"> Millilitre (ml)</option>
        <option value="l"> Litre (l)</option>
        <option value="items"> Individual Items</option>
      </select>

      <input type="string" name="expiryDate" placeholder="DD/MM/YYYY" />
      <input
        type="number"
        name="quantityAvailable"
        placeholder="Quantity Available"
      />
      <input
        type="string"
        name="availabilityTime"
        placeholder="When to pick it up?"
      />
      <button type="submit"> Submit</button>
    </form>
  );
}
