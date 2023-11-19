import React from "react";
import "./preSignup.css";
import { Link } from "react-router-dom";

const PreSignup: React.FC = () => {
  return (
    <div className="preSignup-god-container">
      <div id="preSignup-container">
        <h1>Sign up as</h1>
        <Link to="/SignUp/farmer" className="button">
          Farmer
        </Link>
        <Link to="/SignUp/customer" className="button">
          Customer
        </Link>
      </div>
    </div>
  );
};

export default PreSignup;
