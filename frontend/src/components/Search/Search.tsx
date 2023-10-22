import './search.css'
import {useState} from 'react'


const searchBar = () => {
    const [value, setValue] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('search term:', value);

    }

    return (

        <>
        <form onSubmit={handleSubmit}>
        <div className="search_bar">
      <input 
        type="text"
        className="search_text"
        placeholder="Search for veggies..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        
      />
      <div className = 'search_submit' >
			<button type="submit" >Search</button>
		</div>
    </div>
    </form>
        </>
    )
}


export default searchBar

