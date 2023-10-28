import "./homePage.css";
import Search from "../../Search/Search";
import FarmerSearch from "../farmerSearch/FarmerSearch";

function HomePage() {
  return (
    <>
      <div className="container">
        <img
          src="src/assets/inigo-de-la-maza-marketstall-unsplash.jpg"
          alt="fresh vegetables and fruit"
        ></img>

        <div className="text_container">
          <h1>Welcome to Vegilicious</h1>
          <h3>The place to find fresh local and homegrown produce!</h3>
          <Search></Search>
          <FarmerSearch></FarmerSearch>
        </div>
      </div>
    </>
  );
}

export default HomePage;
