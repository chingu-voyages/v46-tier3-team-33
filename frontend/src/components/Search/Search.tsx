import './search.css'
import { useContext, useState } from 'react'
import SearchResultCard from './searchResultCard';
//import UserContext from '../../utils/UserContext';


const searchBar = () => {
    
    const [value, setValue] = useState('');
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState<any[]>([]); // Use 'any' as a temporary type
    //const { currentUser } = useContext(UserContext);

    
    const fetchData = async () => {
        
        try {
            
            const response = await fetch('http://localhost:8081/product', 
            {
                method: 'GET',
                credentials: 'include'
            });

            if (response.ok) {
                const jsonData = await response.json();
                setData(jsonData);

                // Apply filtering here
                const filtered = jsonData.filter((item: any) =>
                    item.name.toLowerCase().includes(value.toLowerCase())
                );
                setFilteredData(filtered);
                console.log("Filtered results:",filtered)
            } else {
                console.error('API request failed with status:', response.status);
            }
        } catch (error: any) {
            console.error('API request error:', error.message);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();    
        console.log('search term:', value);    

         // Call the fetchData function to make the API request and apply filtering
         fetchData();
        
    }

    return (

        <>
        <form onSubmit={handleSubmit}>
            <div className="search_bar">
                <input required
                    type="text"
                    className="search_text"
                    placeholder="Search for veggies..."
                    value={value}
                    onChange={(e) => {
                    setValue(e.target.value);
                    }}
                    
                />
                <div className = 'search_submit' >
                    <button className="button" type="submit" >Search</button>
                </div>
            </div>
        </form>
        {/* Conditionally render the filtered data */}
        {filteredData.length > 0 ? (
                <div className="filtered_data">
                    <ul>
                        {filteredData.map((item: any) => (
                            <SearchResultCard key={item._id} item={item} />
                        ))}
                    </ul>
                </div>
            ) : (
                <div>No matching results found</div>
            )}
        </>
    )
}


export default searchBar

