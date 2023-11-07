import logo from "/src/assets/logo.svg";
import "./Navbar.css";

import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../utils/UserContext";
import LogoutButton from "../Pages/logout/LogoutButton";

function Navbar() {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="navbar">
        <a href="/">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <div className="links-container">
          <ul className="links-container">
            <li className="link">
              <Link to="/About" className="link">
                About
              </Link>
            </li>
            <li>
              <Link to="/help" className="link">
                Help
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="link">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/Upload" className="link">
                Upload Products
              </Link>
            </li>
            {/* Check if currentUser is null */}
            {currentUser === null ? (
              <>
                <li>
                  <Link to="/preSignup" className="link">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to="/Login" className="link">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/Product" className="link">
                    Product
                  </Link>
                </li>
              </>
            ) : (
              // If currentUser exists, show their identity or email
              <>
                <li className="link">
                  Hello, {currentUser.identity} {currentUser.email}
                </li>
                <li>
                  <Link to="/ProductDetails" className="link">
                    Product
                  </Link>
                </li>
                <li>
                  <LogoutButton />
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
