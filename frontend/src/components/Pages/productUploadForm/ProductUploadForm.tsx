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

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    let newValue = value;
    if (name === "expiryDate") {
      newValue = newValue.replace(/[^0-9]/g, "");

      if (newValue.length > 2) {
        newValue = `${newValue.slice(0, 2)}/${newValue.slice(2)}`;
      }
      if (newValue.length > 5) {
        newValue = `${newValue.slice(0, 5)}/${newValue.slice(5, 7)}`;
      }
    }
    setFormValues((prev) => ({ ...prev, [name]: newValue }));
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleInputChange}
        value={formValues.name}
      />
      <input type="file" name="picture" onChange={handleImageChange} />
      <textarea
        name="description"
        placeholder="Describe your produce"
        onChange={handleInputChange}
        value={formValues.description}
      />
      <input
        type="text"
        name="postcode"
        placeholder="Postcode"
        onChange={handleInputChange}
        value={formValues.postcode}
      />
      <input
        type="number"
        name="price"
        placeholder="Price in £"
        onChange={handleInputChange}
        value={formValues.price}
      />
      <input
        type="number"
        name="quantityAvailable"
        placeholder="Quantity of item"
        onChange={handleInputChange}
        value={formValues.quantityAvailable}
      />
      <label htmlFor="unitOfMeasure"> Unit of Measure </label>
      <select
        id="unitOfMeasure"
        name="unitOfMeasure"
        onChange={handleSelectChange}
      >
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
        value={formValues.expiryDate}
        maxLength={10}
      />
      <input
        type="number"
        name="quantityAvailable"
        placeholder="Quantity Available"
        onChange={handleInputChange}
        value={formValues.quantityAvailable}
      />
      <input
        type="string"
        name="availabilityTime"
        placeholder="When to pick it up?"
        onChange={handleInputChange}
        value={formValues.availabilityTime}
      />
      <button type="submit"> Submit</button>
    </form>
  );
}
