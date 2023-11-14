import React from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../../utils/UserContext";

const DeleteButton: React.FC = () => {
  

  const handleDelete = async () => {
    try {
      const response = await fetch("http://localhost:8081/delete/:id", {
        method: "POST",
        body:"_id",
        credentials: "include",
      });
  
      if (response.ok) {
       
      } else {
        console.error("Delete failed");
      }
    } catch (error) {
      console.error("An error occurred during delete:", error);
    }
  };
  

  return (
    <button onClick={()=>handleDelete()}>Delete Product</button>
  );
};

export default DeleteButton;
