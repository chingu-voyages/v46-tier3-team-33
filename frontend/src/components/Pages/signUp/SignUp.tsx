import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./signUp.css"; // Create a CSS file for styling

interface SignUpProps {
  isFarmer: boolean;
}

const SignUp = (props: SignUpProps) => {
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [isRepeat, setIsRepeat] = useState(true);

  const [passwordStrength, setPasswordStrength] = useState<string>(""); // Weak, Medium, Strong
  // const [progressBarColor, setProgressBarColor] = useState<string>("");

  const navigate = useNavigate(); // Initialize the navigate object

  const onHandleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const emailRule = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // Check if the email is valid
    if (emailRule.test(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const onHandlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const strength = calculatePasswordStrength(newPassword);
    setPasswordStrength(strength);

    // // Set progress bar color based on password strength
    // if (strength === "Weak") {
    //   setProgressBarColor("red");
    // } else if (strength === "Medium") {
    //   setProgressBarColor("orange");
    // } else {
    //   setProgressBarColor("green");
    // }
  };
  const calculatePasswordStrength = (password: string): string => {
    // Add your own logic to calculate password strength here
    // For simplicity, let's consider it strong if it's at least 8 characters long
    if (password.length >= 8) {
      return "Strong";
    } else if (password.length >= 6) {
      return "Medium";
    } else {
      return "Weak";
    }
  };

  const onHandleRepeatPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRepeatPassword = e.target.value;
    setRepeatPassword(newRepeatPassword);
    if (password === newRepeatPassword) {
      setIsRepeat(true);
    } else {
      setIsRepeat(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // API call
      const response = await fetch(
        "https://vegilicious-backend.vercel.app/api/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, farmer: props.isFarmer }),
        }
      );
      if (response.ok) {
        // Assuming the signup is successful, relocate the user to the home page
        navigate("/");
      } else {
        // Handle signup failure, such as displaying an error message to the user
        console.log("Sign up failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={onHandleEmailChange}
            />
            {!isEmailValid && <p>Please enter a valid email.</p>}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={onHandlePasswordChange}
            />
          </div>

          <div>
            <label htmlFor="repeatpassword">Repeat Password</label>
            <br />
            <input
              id="repeatpassword"
              type="password"
              placeholder="Repeat Password"
              value={repeatPassword}
              onChange={onHandleRepeatPassword}
            />

            <div className="password-strength">
              {/* <div
                className="password-progress"
                style={{
                  width: `${password.length * 10}%`,
                  background: progressBarColor,
                }}
              ></div> */}
              {password && (
                <span
                  className={`strength-text ${passwordStrength.toLowerCase()}`}
                >
                  Password Strength: {passwordStrength}
                </span>
              )}
              {!isRepeat && <p>Please repeat the correct password.</p>}
            </div>
          </div>
          <div className="button-container">
            <button type="submit">Sign Up</button>
          </div>

          <p>
            Have an account? <a href="/login">Login here</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
