

import "./about.css"

function About() {
  return (
    <div className="about-container">
		<div className="about-image">
           <img  src="src\assets\nathan-dumlao-bRdRUUtbxO0-unsplash.jpg" alt = "yellow question mark" ></img>
        </div>
		<div className="text">
			<h1>About Us</h1>
			<p>We are a team of developers who have put together this app to connect</p>
			<p>local people with local producers of fruit and vegetables.</p>
			<p>We all have different experiences in coding, which we  bring to this app.</p>
			<p>We are all part of the <a href="https://www.chingu.io/" target="_blank">Chingu voyage 46 experience</a></p>
			<p>and we have worked hard to get this app completed in the 6 week timeframe we have.</p>

			<p>So if you are looking for fresh fruit and veggies or if you are a</p>
			<p>producer with fruit and veggies to sell this app provides you with</p>
			<p>a way to do that.</p>
		</div>
	  
    </div>
  );
}

export default About

