import './search.css'
import { useContext, useState, useEffect } from 'react'
import SearchResultCard from './searchResultCard';
import UserContext from '../../utils/UserContext';


const SearchBar = () => {
    const currentUser = useContext(UserContext);
    
    const [message, setMessage] = useState('')
    const [value, setValue] = useState('');
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState<any[]>([]); // Use 'any' as a temporary type
    const [searchSelection, setSearchSelection] = useState('product')
        
    const fetchData = async () => {
        
        try {
            
            const response = await fetch('http://localhost:8081/product', 
            {
                method: 'GET',
                credentials: 'include'
            });

            if (response.ok) {
                const data = await response.json();
                setData(data);
                
                //if the user selects product search
                if (searchSelection === "product") {

                    const filtered = data.filter((item: any) =>
                    item.name.toLowerCase().includes(value.toLowerCase())
                );
                setFilteredData(filtered);

                
                //if the user selects postcode search
                } else if (searchSelection === "postcode") {
                    
                    const filtered = data.filter((item: any) =>
                    item.postcode.toLowerCase().includes(value.toLowerCase())
                );
                
                setFilteredData(filtered);
                }
            
                
            } else {
                setMessage("Please login to search");
                console.error('API request failed with status:', response.status);
            }

        } catch (error: any) {
            console.error('API request error:', error.message);
            setMessage("Server Error - Please come back later");
        }
    };

    //gives the user a message about the number of results found 
    useEffect(() => {
        // This effect will run whenever filteredData changes
        if ( data === null) {
            setMessage("Search");
        }
        else if (filteredData.length === 0 && data.length === 0) {
            setMessage("No results found, try again");

        } else {
            setMessage(`${filteredData.length} results found`);
        }
    }, [filteredData]); // This ensures that the effect runs when filteredData changes


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();        
        if (currentUser === null) {
            setMessage("Please login to search")

        } else {
            // Call the fetchData function to make the API request and apply filtering
            fetchData();
        }
    }

    return (

        <>
        <div >
        <p>Choose your search category and hit enter <span>&#8617;</span> to search</p>

            <form className='search-container' onSubmit={handleSubmit}>
                <input className="search-box"
                    required
                    type="text"
                    placeholder={`Search for ${searchSelection}..`}
                    value={value}
                    onChange={(e) => {
                    setValue(e.target.value);
                    }}
                    
                />
                <button className={`buttonSearchSelection ${searchSelection === "product" ? "selected" : ""}`} onClick={() => setSearchSelection("product")}>Product Search</button>
                <button className={`buttonSearchSelection ${searchSelection === "postcode" ? "selected" : ""}`} onClick={() => setSearchSelection("postcode")}>Postcode Search</button>

            </form>   
        </div>
        <div className='results-message'>{message}</div>
    
            <div className="filtered-data">
                
                <ul>
                    {filteredData.map((item: any) => (
                        <SearchResultCard key={item._id} item={item} />
                    ))}
                </ul>
            </div>
            
        </>
    )
}


export default SearchBar

