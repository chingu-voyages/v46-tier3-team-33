import React from "react";
import "./preSignup.css"

const PreSignup: React.FC = () => {

  return (
    <div className="preSignup-god-container">
      <div id='preSignup-container'>
        <h1>Sign up as</h1>
        <a className="button" href="/SignUp/farmer">Farmer</a>
        <a className="button" href="/SignUp/customer">Customer</a>
      </div>
    </div> 
  )
};

export default PreSignup;