import './search.css'

// Define the Item type
type Item = {
    _id:Object;
    userId: string;
    name: string;
    picture: string;
    description:string;
    postcode:string;
    price: number;
    quantityOfUnit: number;
    unitOfMeasure: string;
    expiryDate: string;
    quantityAvailable: number;
    availabilityTime: string;
  };
  

  
// Use the Item type to type the item parameter
const SearchResultCard: React.FC<{ item: Item }> = ({ item }) => {
  console.log("Image URL:", item.picture);
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
        <strong>User ID:</strong> {item.userId}
        <br />
        <strong>Description:</strong> {item.description}
        <br />
        <strong>Postcode:</strong> {item.postcode}
        <br />
        <strong>Price per unit:</strong> {item.price}
        <br />
        <strong>Quantity of unit:</strong> {item.quantityOfUnit}
        <br />
        <strong>Unit of measure:</strong> {item.unitOfMeasure}
        <br />
        <strong>Expiry date:</strong> {item.expiryDate}
        <br />
        <strong>Quantity available:</strong> {item.quantityAvailable}
        <br />
        <strong>Availability time:</strong> {item.availabilityTime}
      </div>
    </div>
  );
}

export default SearchResultCard;

