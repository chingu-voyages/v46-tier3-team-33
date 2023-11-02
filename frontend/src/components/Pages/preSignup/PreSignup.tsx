import React from "react";
import "./preSignup.css"

const PreSignup: React.FC = () => {

  return (
    <div className="preSignup-god-container">
      <div id='preSignup-container'>
        <h1><a href="/SignUp/farmer"> Signup as a Farmer </a></h1>
        <h1><a href="/SignUp/customer"> Signup as a Customer </a></h1>
          
        <p className='prompt-login-text'>Have an account?  <a href="/login" className='prompt-login-link'>Login</a> now</p>
      </div>
				

    </div> 
  )
};

export default PreSignup;