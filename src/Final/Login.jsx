// export default Form;
import React, { useState } from 'react';
import image1 from './images/Walking.jpg';
import logo from './images/CD logo.jpg';
import image2 from './images/cycle.jpg'
import RegisterForm from './RegisterForm';
import './Login.css';
import { useNavigate } from "react-router-dom";


// Reusable Button Component
const Button = ({ text, onClick, value, onChange }) => (
  <button
    onClick={onClick}
    value={value}
    onChange={onChange}
    style={{
      padding: "7px 140px",
      border: "none",
      cursor: "pointer",
      borderRadius: "10px",
      margin: "10px 60px",
    }}
  >
    {text}
  </button>
);

// Login Form Component
const LoginForm = ({ onSwitchToRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/Register");
  }

    const handleLogin = () => {
      navigate("/Dashboard");
    };

  return (
    <div className="background">
      <br />
      <br />
      <div className="loginbox d-flex">
        <div>
          <img src={image1} alt="hhh" className="fitness text-success" />
        </div>
        <div>
          <img src={logo} alt="logo" className="logo " />
          <br />
          <h2 style={{ margin: "10px 160px 10px" }}>Login</h2>
          <h2 style={{ margin: "10px 80px 10px" }}>Welcome back !</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button text="Login" onClick={handleLogin} />
          <p style={{ margin: "10px 50px"  }}>
            Don't have an account?{" "}
            <span
              style={{ color: "green", cursor: "pointer"}}
              onClick={onSwitchToRegister}
            >
              Register
            </span>
          </p>{" "}
        </div>
      </div>
    </div>
  );
};


// Main Component
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {isLogin ? (
        <LoginForm onSwitchToRegister={() => setIsLogin(false)} />
      ) : (
        <RegistrationForm onSwitchToLogin={() => setIsLogin(true)} />
      )}
    </div>
  );
};
  
export default LoginForm;