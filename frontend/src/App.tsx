// import { useState } from 'react'
import './App.css';
import Navbar from './components/Nav/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Pages/homePage/HomePage';
import About from './components/Pages/about/About';
import Contact from './components/Pages/contact/Contact';

function App() {
	return (
		<>
			<Router>
				<div className='App'>
					<Navbar />
					<div className='content'>
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/About' element={<About />} />
							<Route path='/Contact' element={<Contact />} />
						</Routes>
					</div>
				</div>
			</Router>
		</>
	);
}

export default App;
