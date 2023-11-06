import { useState } from "react";
import "./productUploadForm.css";

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
    const files = e.target.files as FileList; // using type assertion here
    if (files.length > 0) {
      setFormValues((prev) => ({ ...prev, picture: files[0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formValues);
    try {
      const formData = new FormData();
      formData.append('name', formValues.name);
      formData.append('picture', formValues.picture as File);
      formData.append('description', formValues.description);
      formData.append('postcode', formValues.postcode);
      formData.append('price', formValues.price.toString());
      formData.append('quantityOfUnit', formValues.quantityOfUnit.toString());
      formData.append('unitOfMeasure', formValues.unitOfMeasure);
      formData.append('expiryDate', formValues.expiryDate);
      formData.append('quantityAvailable', formValues.quantityAvailable.toString());
      formData.append('availabilityTime', formValues.availabilityTime);
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        className="upload-form-input"
        type="text"
        name="name"
        placeholder="Product Name"
        onChange={handleInputChange}
        value={formValues.name}
      />

      <label htmlFor="picture">Upload Product Image</label>
      <input
        id="picture"
        className="upload-form-input"
        type="file"
        name="picture"
        onChange={handleImageChange}
      />

      <label htmlFor="description">Description of Product</label>
      <textarea
        id="description"
        name="description"
        placeholder="Describe your produce"
        onChange={handleInputChange}
        value={formValues.description}
        className="upload-form-textarea"
      />

      <label htmlFor="postcode">Postcode</label>
      <input
        id="postcode"
        className="upload-form-input"
        type="text"
        name="postcode"
        placeholder="Postcode"
        onChange={handleInputChange}
        value={formValues.postcode}
      />

      <label htmlFor="price">Price in £</label>
      <input
        id="price"
        className="upload-form-input"
        type="number"
        name="price"
        placeholder="Price"
        onChange={handleInputChange}
        value={formValues.price}
      />

      <label htmlFor="quantityAvailable">Available Quantity</label>
      <input
        id="quantityAvailable"
        className="upload-form-input"
        type="number"
        name="quantityAvailable"
        placeholder="Quantity of item"
        onChange={handleInputChange}
        value={formValues.quantityAvailable}
      />

      <label htmlFor="unitOfMeasure">Units</label>
      <select
        className="upload-form-select"
        id="unitOfMeasure"
        name="unitOfMeasure"
        onChange={handleSelectChange}
      >
        <option value="g">Gram (g)</option>
        <option value="kg">Kilogram (kg)</option>
        <option value="oz">Ounce (oz)</option>
        <option value="lb">Pound (lb)</option>
        <option value="ml">Millilitre (ml)</option>
        <option value="l">Litre (l)</option>
        <option value="items">Individual Items</option>
      </select>

      <label htmlFor="expiryDate">Expiry Date</label>
      <input
        id="expiryDate"
        type="text"
        name="expiryDate"
        placeholder="DD/MM/YYYY"
        onChange={handleInputChange}
        value={formValues.expiryDate}
        maxLength={10}
        className="upload-form-input"
      />

      <label htmlFor="availabilityTime">Pick Up Time</label>
      <input
        id="availabilityTime"
        type="text"
        name="availabilityTime"
        placeholder="When to pick it up?"
        onChange={handleInputChange}
        value={formValues.availabilityTime}
        className="upload-form-input"
      />

      <button className="upload-form-button" type="submit">
        Submit
      </button>
    </form>
  );
}
