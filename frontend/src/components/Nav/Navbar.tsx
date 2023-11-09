import logo from "/src/assets/logo.svg";
import "./Navbar.css";

import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../utils/UserContext";
import LogoutButton from "../Pages/logout/LogoutButton";

function Navbar() {
  const { currentUser } = useContext(UserContext);
  console.log("Current user: ", currentUser)


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
              </>
            ) : (              
              // If currentUser exists, show their identity or email 
              //and give access to upload products link.
              <>
              <li className="link">
                Hello, {currentUser.email}
              </li>
                {/* Check if isFarmer is true before rendering the link */}
                {currentUser.isFarmer && (
                  <li>
                    <Link to="/Upload" className="link">
                      Upload Products
                    </Link>
                  </li>
                )}
             
              <li className="link">
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
