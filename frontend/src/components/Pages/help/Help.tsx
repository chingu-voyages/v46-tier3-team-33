import "./help.css"

function Help() {
  return (
    <div className="help-container">
		<div >
        <img  className="help-image" src="src/assets/simone-secci-49uySSA678U-unsplash.jpg" alt = "yellow question mark" ></img>
        </div>
        <div className="text">
			<h1>Help</h1>
			
			<p>If you are a farmer, then in order to list your fruit and veggies for sale, you will need to sign up for a Farmer account and login before you can do this.</p>
			<p>If you are looking to purchase fruit and/or veggies from a local farmer, you will need to sign up for a Customer account before you can search and contact a farmer.</p>
			<p>Unregistered users cannot see farmer's listings or post items to sell. You must sign up and login to use this service.</p>
			<p>Any issues please don't hesitate to contact us for assistance using the contact form.</p>
		</div>
    </div>
);
}

export default Help
