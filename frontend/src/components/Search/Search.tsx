import "./search.css";
import { useContext, useEffect, useState } from "react";
import SearchResultCard from "./searchResultCard";
import UserContext from "../../utils/UserContext";
import heroImage from "../../assets/vegilicious_hero.png";

const SearchBar = () => {
  const currentUser = useContext(UserContext);

  const [message, setMessage] = useState("Please select a search option");
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState<any[]>([]); // Use 'any' as a temporary type
  const [searchSelection, setSearchSelection] = useState("product");

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
      <p>
        Choose your search category and hit enter <span>&#8617;</span> to search
      </p>
      <div className="search-container">
        
      <button
          className={`buttonSearchSelection ${
            searchSelection === "name" ? "selected" : ""
          }`}
          onClick={() => setSearchSelection("name")}>
          Product
        </button>

        <button
          className={`buttonSearchSelection ${
            searchSelection === "postcode" ? "selected" : ""
          }`}
          onClick={() => setSearchSelection("postcode")}>
          Postcode
        </button>

        <form onSubmit={handleSubmit}>
          <div className="search-bar">
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
          </div>
        </form>

      </div>

      <div className="results-message">{message}</div>

      {value === "" ? (
        <img src={heroImage} alt="Hero Image" className="hero-image" />
      ) : (
        <div className="filtered-data">
          <ul>
            {filteredData.map((item: any) => (
              <SearchResultCard key={item._id} item={item} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SearchBar;
