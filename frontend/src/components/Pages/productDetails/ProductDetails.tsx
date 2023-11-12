import SearchResultCard from "../../Search/searchResultCard";
import UserContext from "../../../utils/UserContext";
import { useContext, useEffect, useState } from "react";

const FarmersProductsDisplay = () => {
  const currentUser = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [filteredData, setFilteredData] = useState<any[]>([]); // Use 'any' as a temporary type


  useEffect(() => {
    fetchData();
  }, [currentUser]);
  //Need to deconstruct currentUser twice to get userID as a string to send to the backend
  console.log("Current user info: ", currentUser.currentUser.userID)

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
      // console.error("API request error:", error.message);
      setMessage("Server Error - Please come back later");
    }
  };
  

    return (
      <>
       <div className="results-message">{message}</div>
       <h1>Your products</h1>

      <div className="filtered-data">
          <ul>
            {filteredData.map((item: any) => (
              <SearchResultCard key={item._id} item={item} />
            ))}
          </ul>
        </div>
      
      
      </>
    );

}
export default FarmersProductsDisplay;