import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useState, useContext } from "react";
import UserContext from "../../../utils/UserContext";

const LoginForm: React.FC = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate(); // Initialize the navigate object

  // If the user is already logged in, redirect them to the home page
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8081/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (response.ok) {
        // Assuming the login is successful, relocate the user to the home page
        const data = await response.json();
        setCurrentUser(data.user);
        console.log(data.user);
        navigate("/");
      } else {
        // Handle login failure, such as displaying an error message to the user
        console.log("Login failed");
        console.log(email);
        console.log(password);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <form className="input_form" onSubmit={handleSubmit}>
        <div className="form_row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="youremail@gmail.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="form_row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <div className="form_row">
          <button type="submit">Login</button>
        </div>

        <span>
          Don't have an account? <a href="/signUp">Sign up here</a>
        </span>
      </form>
    </>
  );
};

export default LoginForm;
