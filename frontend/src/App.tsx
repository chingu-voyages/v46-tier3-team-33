// import { useState } from 'react'
import "./App.css";
import Navbar from "./components/Nav/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/homePage/HomePage";
import About from "./components/Pages/about/About";
import Contact from "./components/Pages/contact/Contact";
import Help from "./components/Pages/help/Help";
import Login from "./components/Pages/login/Login";
import SignUp from "./components/Pages/signUp/SignUp";
import ProductUploadForm from "./components/Pages/productUploadForm/ProductUploadForm";


import { useState, useEffect } from "react";
import UserContext from "./utils/UserContext";
import { User } from "./utils/interface";


function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authchecked, setAuthChecked] = useState<boolean>(false);

  useEffect(() => {
    const validateToken = async () => {
      try {
        const response = await fetch("http://localhost:8081/user", {
          method: "GET",
          credentials: "include", // Ensures the request includes the cookie
        });

        if (!response.ok) {
          throw new Error("Not logged in");
        }

        const data = await response.json();
        console.log(data);

        setCurrentUser(data.user);
      } catch (err: unknown) {
        console.error((err as Error).message);
      } finally {
        setAuthChecked(true);
      }
    };

    validateToken();
  }, []);

  if (!authchecked) {
    return null;
  }

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Help" element={<Help />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/Upload" element={<ProductUploadForm />} />
            </Routes>
          </div>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
