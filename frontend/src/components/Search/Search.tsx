import "./search.css";
import { useContext, useEffect, useState } from "react";
import SearchResultCard from "./searchResultCard";
import UserContext from "../../utils/UserContext";

const SearchBar = () => {
  const currentUser = useContext(UserContext);

  const [message, setMessage] = useState("Please select a search option");
  const [value, setValue] = useState("");
  //   const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState<any[]>([]); // Use 'any' as a temporary type
  const [searchSelection, setSearchSelection] = useState("");

  useEffect(() => {
    if ((searchSelection === "" || value === "") && filteredData.length === 0) {
      setMessage("Please select a search option and enter a value");
    } else if (filteredData.length > 0) {
      setMessage(`Found ${filteredData.length} results`);
    } else if (filteredData.length === 0) {
      setMessage("No results found");
    }
  }, [filteredData, searchSelection, value]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8081/product?searchType=${searchSelection}&searchTerm=${value}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();
        setFilteredData(data);
        console.log(data);
      } else {
        setMessage("Please login to search");
        console.error("API request failed with status:", response.status);
      }
    } catch (error: any) {
      console.error("API request error:", error.message);
      setMessage("Server Error - Please come back later");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentUser === null) {
      setMessage("Please login to search");
    } else if (searchSelection === "" || value === "") {
      setMessage("Please select a search option");
    } else if (searchSelection !== "" && value !== "") {
      fetchData();
    }
  };

  return (
    <>
      <button
        className={`buttonSearchSelection ${
          searchSelection === "name" ? "selected" : ""
        }`}
        onClick={() => setSearchSelection("name")}
      >
        Product Search
      </button>
      <button
        className={`buttonSearchSelection ${
          searchSelection === "postcode" ? "selected" : ""
        }`}
        onClick={() => setSearchSelection("postcode")}
      >
        Postcode Search
      </button>

      <form onSubmit={handleSubmit}>
        <div className="search_bar">
          <input
            required
            type="text"
            className="search_text"
            placeholder={`Search for ${searchSelection}..`}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <div className="search_submit">
            <button className="button" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
      {/* Conditionally render the filtered data */}
      {filteredData.length > 0 ? (
        <div className="filtered_data">
          <div>{message}</div>
          <ul>
            {filteredData.map((item: any) => (
              <SearchResultCard key={item._id} item={item} />
            ))}
          </ul>
        </div>
      ) : (
        <div>{message}</div>
      )}
    </>
  );
};

export default SearchBar;
