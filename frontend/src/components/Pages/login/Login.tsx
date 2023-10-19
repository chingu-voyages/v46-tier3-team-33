// import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
import { useState, useContext } from 'react';
import UserContext from '../../../utils/UserContext';

interface UserContextBody {
	currentUser?: string;
	password?: string;
  }

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {currentUser, setCurrentUser} = useContext(UserContext);

  const navigate = useNavigate(); // Initialize the navigate object

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

	// Implement your login logic here
	  if (currentUser !== null) {
		return <p>You logged in as {currentUser.name}.</p>;
	  }
	console.log(currentUser)


	//need to check emails are valid and passwords are long enough.

    // Assuming the login is successful, relocate the user to the home page
    navigate('/'); // navigates to home page after login
  };

  return (
	<>
    <form className='input_form' onSubmit={handleSubmit}>
      	<div className = 'form_row'>
	  		<label htmlFor="email">Email</label>
        	<input type="email" id="email" placeholder = "youremail@gmail.com" value={email} onChange={(event) => setEmail(event.target.value)} required/>
		</div>
	  
		<div className = 'form_row'>
      		<label htmlFor="password">Password</label>
       	 	<input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
      	</div>
	
		<div className = 'form_row'>
			<button type="submit">Login</button>
		</div>
	</form>

	<button >Don't have an account? Sign up here.</button>
	</>
  );
};

export default LoginForm;