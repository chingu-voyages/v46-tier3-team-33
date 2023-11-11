import SearchResultCard from "../../Search/searchResultCard";
import UserContext from "../../../utils/UserContext";
import { useContext, useEffect, useState } from "react";

const FarmersProductsDisplay = () => {
  const currentUser = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [filteredData, setFilteredData] = useState<any[]>([]); // Use 'any' as a temporary type


    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/product`,
          {
            method: "GET",
            credentials: "include",
            
          }
        );

        if (response.ok) {
          const data = await response.json();
          setFilteredData(data);
        } else {
          setMessage("Please login to search");
          console.error("API request failed with status:", response.status);
        }
      } catch (error: any) {
        console.error("API request error:", error.message);
        setMessage("Server Error - Please come back later");
      }
    };

    fetchData();

    return (
      <>
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