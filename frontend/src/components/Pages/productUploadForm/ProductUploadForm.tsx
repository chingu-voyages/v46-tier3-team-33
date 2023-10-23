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
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    picture: null,
    description: "",
    postcode: "",
    price: 0,
    quantityOfUnit: 0,
    unitOfMeasure: "",
    expiryDate: "",
    quantityAvailable: 0,
    availabilityTime: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormValues((prev) => ({ ...prev, picture: e.target.files[0] }));
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formValues);
  };
  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleInputChange}
      />
      <input type="file" name="picture" onChange={handleImageChange} />
      <textarea name="description" placeholder="Describe your produce" />
      <input
        type="text"
        name="postcode"
        placeholder="Postcode"
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price in £"
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantity of item"
        onChange={handleInputChange}
      />
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

      <input
        type="string"
        name="expiryDate"
        placeholder="DD/MM/YYYY"
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="quantityAvailable"
        placeholder="Quantity Available"
        onChange={handleInputChange}
      />
      <input
        type="string"
        name="availabilityTime"
        placeholder="When to pick it up?"
        onChange={handleInputChange}
      />
      <button type="submit" onSubmit={handleSubmit}>
        {" "}
        Submit
      </button>
    </form>
  );
}
