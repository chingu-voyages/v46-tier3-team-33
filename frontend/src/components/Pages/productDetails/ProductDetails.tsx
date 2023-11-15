import UserContext from "../../../utils/UserContext";
import { useContext, useEffect, useState } from "react";
import ProductDetailsCard from "./ProductDetailCard";
import DeleteButton from "./deleteProduct"; // Import the DeleteButton component

const FarmersProductsDisplay = () => {
  const currentUser = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, [currentUser]);

  const handleDeleteCallback = async () => {
    console.log("onDelete callback called");
    await fetchData(); // Refresh the list of products after deletion
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8081/products?userId=${currentUser.currentUser.userID}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();
        setFilteredData(data);

        if (data.length === 0) {
          setMessage("No results found");
        }
      } else {
        setMessage("Please login to search");
        console.error("API request failed with status:", response.status);
      }
    } catch (error) {
      setMessage("Server Error - Please come back later");
      console.error("API request error:", error.message);
    }
  };

  return (
    <>
      <div className="results-message">{message}</div>
      <h1>Your products</h1>

      <div>
        <ul>
          {filteredData.map((item: any) => (
            <div key={item._id}>
              <ProductDetailsCard item={item} />
              {/* Pass the product ID and the onDelete callback to DeleteButton */}
              <DeleteButton id={item._id} onDelete={handleDeleteCallback} />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FarmersProductsDisplay;
