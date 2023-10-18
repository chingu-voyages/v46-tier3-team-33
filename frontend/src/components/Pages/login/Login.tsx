import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'

const LoginForm: React.FC = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate(); // Initialize the navigate object

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('username:', username); //need to work out where these details go next
    console.log('password:', password); //how do we secure the password?

	// Implement your login logic here

    // Assuming the login is successful, relocate the user to the home page
    navigate('/'); // navigates to home page after login
  };

  return (
    <form className='input_form' onSubmit={handleSubmit}>
      <div className = 'form_row'>
	  <label>
        Username:
        	<input type="text" value={username} onChange={(event) => setUsername(event.target.value)} required/>
      </label>
	  </div>
	  <div className = 'form_row'>
      <label>
        Password:
        	<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
      </label>
	  </div>
	  <div className = 'form_row'>
      	<button type="submit">Login</button>
	  </div>
	</form>
  );
};

export default LoginForm;