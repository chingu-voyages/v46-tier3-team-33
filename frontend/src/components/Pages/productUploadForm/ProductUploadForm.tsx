import { useState } from "react";

interface FormValues {
  name: string;
  picture: File | null;
  description: string;
  postcode: string;
  price: number;
  quantityOfUnit: number;
  perUnit: string;
  expiryDate: string;
  quantityAvailable: number;
  availabilityTime: string;
}
export default function ProductUploadForm() {
  return (
    <form>
      <input type="text" name="name" placeholder="Your Name" />
      <input type="file" name="picture" />
      <input />
    </form>
  );
}
