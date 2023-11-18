import ContactFarmerForm from "../Pages/contact/ContactFarmerForm";
import "./searchResults.css";
import React, { useState } from "react";


// Define the Item type
type Item = {
  _id: object;
  name: string;
  image: { contentType: string; fileName: string };
  description: string;
  postcode: string;
  price: number;
  stock: number;
  unit: string;
  expiryDate: string;
  availabilityTime: string;
  userId: { email: string; _id: string };
};



const SearchResultCard: React.FC<{ item: Item }> = ({ item }) => {
  const [showContactFarmerForm, setShowContactFarmerForm] = useState(false);

  const handleContactClick = () => {
    setShowContactFarmerForm(true);
  };
  //set image url for render
  const imageUrl = `public/uploads/${item.image.fileName}`;

  return (
    <div className="search-result-card">
      <div className="image-container">
        <img className="thumbnail" src={imageUrl} alt={item.description} />
      </div>
      <div className="card-content">
        <strong>Name:</strong> {item.name}
        <br />
        <strong>Description:</strong> {item.description}
        <br />
        <strong>Postcode:</strong> {item.postcode}
        <br />
        <strong>Price per unit:</strong> {item.price}
        <br />
        <strong>Quantity of unit:</strong> {item.stock}
        <br />
        <strong>Unit of measure:</strong> {item.unit}
        <br />
        <strong>Expiry date:</strong> {item.expiryDate}
        <br />
        <strong>Availability time:</strong> {item.availabilityTime}
        <br />
        <button onClick={handleContactClick}>Contact</button>
        {showContactFarmerForm && (
          <ContactFarmerForm
            defaultEmail={item.userId?.email}
            onClose={() => setShowContactFarmerForm(false)}
          />
          )}
      </div>     
    </div>
  );
};

export default SearchResultCard;
