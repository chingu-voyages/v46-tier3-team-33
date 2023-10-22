import "./homePage.css"
import Search from "../../Search/Search";


function HomePage() {


	return (
	<>
		<div className="container">
			<div className="text_container">
				<h1>Welcome to Vegilicious</h1>
				<h3>The place to find fresh local and homegrown produce!</h3>
				<Search></Search>
			</div>
			<img className="background" src="src/assets/inigo-de-la-maza-marketstall-unsplash.jpg" alt = "fresh vegetables and fruit" ></img>
			
		</div>
	</>
)}

export default HomePage;
