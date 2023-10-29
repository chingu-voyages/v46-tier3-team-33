import './search.css'

// Define the Item type
type Item = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
  
// Use the Item type to type the item parameter
const SearchResultCard: React.FC<{ item: Item }> = ({ item }) => {

  return (
    <div className="search-result-card">
      <div className="image-container">
        {/* Placeholder for image */}
        {/* we can replace this with an actual image */}
        <img
          src="https://via.placeholder.com/100"
          alt="Result Image"
        />
      </div>
      <div className="card-content">
        <strong>Title:</strong> {item.title}
        <br />
        <strong>User ID:</strong> {item.userId}
        <br />
        <strong>Body:</strong> {item.body}
      </div>
    </div>
  );
}

export default SearchResultCard;

