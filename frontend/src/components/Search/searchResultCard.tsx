import './search.css'

// Define the Item type
type Item = {
    _id: Object;
    name: string;
    picture: string;
    description: string;
    postcode: string;
    price: number;
    stock: number;
    unitOfMeasure: string;
    expiryDate: string;
    availabilityTime: string;
  };
  
  
// Use the Item type to type the item parameter
const SearchResultCard: React.FC<{ item: Item }> = ({ item }) => {
  return (
    <div className="search-result-card">
      <div className="image-container">
        <img
          src={item.picture}
          alt={item.description}
        />
      </div>
      <div className="card-content" >
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
        <strong>Unit of measure:</strong> {item.unitOfMeasure}
        <br />
        <strong>Expiry date:</strong> {item.expiryDate}
        <br />
        <strong>Availability time:</strong> {item.availabilityTime}
      </div>
    </div>
  );
}

export default SearchResultCard;

