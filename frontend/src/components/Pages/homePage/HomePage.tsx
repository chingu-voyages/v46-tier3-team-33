import "./homePage.css"
import Search from "../../Search/Search";
import PreSignup from "../preSignup/PreSignup";


function HomePage() {


	return (
	<>
		<div className="container">
		<img className="background_img" src="src/assets/inigo-de-la-maza-marketstall-unsplash.jpg" alt = "fresh vegetables and fruit" ></img>
			
			<div className="text-container">
				<h1>Welcome to Vegilicious</h1>
				<h3>The place to find fresh local and homegrown produce!</h3>
				<Search></Search>
				
			</div>
			<PreSignup />
			
		</div>
	</>
)}

export default HomePage;
