

import "./about.css"

function About() {
  return (
    <div className="about-container">
		<div >
           <img className="about-image" src="src/assets/nathan-dumlao-bRdRUUtbxO0-unsplash.jpg" alt = "yellow-red question mark" ></img>
        </div>
		<div className="text">
			<h1>About Us</h1>
			<p>We are a team of developers who have put together this application to connect local people with local producers of fruit and vegetables.</p>
			<p>We all have different experiences in coding which we brought to this application.</p>
			<p>This was part of the <a href="https://www.chingu.io/" target="_blank">Chingu Voyage 46 experience</a> and we have worked hard to get this app completed in the 6 weeks time frame.</p>
			<p>Any queries please use the contact form to send us a message.</p>
			<ul>
			<li>Product Owner/Backend Developer - Valeria Serci</li>
			<li>Backend developer - Justin Chen</li>
			<li>Backend developer/Deployment - Robi Maliqi</li>
			<li>Frontend developer - Debbie Thompson</li>
			<li>Frontend developer - Jena Sivakumar</li>
			<li>Frontend developer - Shanis Fung</li>
			<li>Frontend developer - Becky Entwistle</li>
			<li>Our Voyage Guide - Enoch Osarenren</li>
			</ul>

			
		</div>
	  
    </div>
  );
}

export default About

