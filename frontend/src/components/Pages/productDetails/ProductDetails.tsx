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
  console.log("Current user info: ", currentUser.currentUser)

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
        //const filtered = data.filter((item: { userID: any; }) => item.userID === currentUser.userID);
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