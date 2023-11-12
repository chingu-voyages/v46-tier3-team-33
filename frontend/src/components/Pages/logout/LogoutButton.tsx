import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../../utils/UserContext";

const LogoutButton: React.FC = () => {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch(
        "https://vegilicious-backend.vercel.app/api/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );

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

  return <button onClick={() => handleLogout()}>Log Out</button>;
};

export default LogoutButton;
