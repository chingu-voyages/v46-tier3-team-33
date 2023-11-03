import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'

const SignUpCustomer: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    
    const [password, setPassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');
    const [isRepeat, setIsRepeat] = useState(true);

    const navigate = useNavigate(); // Initialize the navigate object

    const onHandleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        const emailRule = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        // Check if the email is valid
        if (emailRule.test(email)) {
            setIsEmailValid(true);
        } else {
            setIsEmailValid(false);
            }}  

    const onHandleRepeatPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newRepeatPassword = e.target.value;
        setRepeatPassword(newRepeatPassword);
        console.log(password === newRepeatPassword)
        if (password === newRepeatPassword) {
            setIsRepeat(true);
        } else {
            setIsRepeat(false);
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            //API call 
            const response = await fetch('http://localhost:8081/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),

            });
            if (response.ok) {
                // Assuming the signup is successful, relocate the user to the home page
                navigate('/');
            } else {
                // Handle singup failure, such as displaying an error message to the user
                console.log('Sign up failed');
                console.log(email)
                console.log(password)
            }
            } catch (error) {
                console.error('An error occurred:', error);
            }
    }
    return (<>
    <div className='front-page'>
        <div>
        <h1>Vegilicious</h1>
        </div>
       
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={onHandleEmailChange}
                />
                {!isEmailValid && <p>Please enter a valid email.</p>}
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Repeat Password"
                    value={repeatPassword}
                    onChange={onHandleRepeatPassword}
                />
                {!isRepeat && <p>Please repeat correct password.</p>}
                <button type="submit">Sign Up</button>
            </form>
            
            
            <span>Have an account? <a href="/login">Login here</a></span>
        </div>

    </div>

    </>)    
}

export default SignUpCustomer;
