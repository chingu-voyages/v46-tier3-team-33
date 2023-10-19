// import { useState } from 'react'
import './App.css';
import Navbar from './components/Nav/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Pages/homePage/HomePage';
import About from './components/Pages/about/About';
import Contact from './components/Pages/contact/Contact';
import Help from './components/Pages/help/Help';
import Login from './components/Pages/login/Login';
import SignUp from './components/Pages/signUp/SignUp';
import UserContext from './utils/UserContext';
import { useState } from 'react';


function App() {
	const [currentUser, setCurrentUser] = useState({})
	return (
		<>
		<UserContext.Provider  value={{
        currentUser,
        setCurrentUser
      }}>
			<Router>
				<div className='App'>
					<Navbar />
					<div className='content'>
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/About' element={<About />} />
							<Route path='/Contact' element={<Contact />} />
							<Route path='/Help' element={<Help />} />
							<Route path='/Login' element={<Login />} />
							<Route path='/SignUp' element={<SignUp />} />
						</Routes>
					</div>
				</div>
			</Router>
		</UserContext.Provider>
		</>
	);
}

export default App;
