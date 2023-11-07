import React from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../../utils/UserContext";

const LogoutButton: React.FC = () => {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8081/logout", {
        method: "POST",
        credentials: "include",
      });
  
      if (response.ok) {
        setCurrentUser(null);
        navigate("/login"); // Redirect to login page
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("An error occurred during logout:", error);
    }
  };
  

  return (
    <button onClick={()=>handleLogout()}>Sign Out</button>
  );
};

export default LogoutButton;
