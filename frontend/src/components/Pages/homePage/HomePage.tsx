import "./homePage.css";
import Search from "../../Search/Search";

function HomePage() {
  return (
    <>
      <div className="container">
        {/* <img
          className="background_image"
          src="src/assets/vegelicious_hero.png"
          alt="fresh vegetables and fruit"
        ></img> */}

        <div className="text-container">
          {/* <h1>Welcome to Vegilicious</h1>
          <h3>The place to find fresh local and homegrown produce!</h3> */}
          <Search></Search>
        </div>
      </div>
    </>
  );
}

export default HomePage;
