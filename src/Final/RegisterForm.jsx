import React from "react";
import './Login.css';

// Registration Form Component
const RegistrationForm = ({ onSwitchToLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (e) => {
    const InputFieldValue = e.target.value;
    const domain = "@gmail.com";

    // Prevent appending if the user deletes or edits naturally
    if (InputFieldValue.endsWith(domain)) {
      setEmail(InputFieldValue);
      return;
    }

    let updatedValue = InputFieldValue;

    // Remove the domain if the user edits it
    if (InputFieldValue.includes(domain)) {
      updatedValue = InputFieldValue.replace(domain, "");
    }

    // Append the domain if the user input doesn't have it yet
    if (updatedValue && !updatedValue.includes("@")) {
      updatedValue += domain;
    }

    setEmail(updatedValue);
  };
  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Registered with Username: ${username}, Email: ${email}`);
  };
  return (
    <div className="backgroundRegister">
      <br />
      <br />
      <form>
        <div className="loginbox d-flex">
          <div style={{ textAlign: "center" }}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "150px", height: "135px", marginTop: "2px" }}
            />
            <br />
            <h4>Please Fill out form to Register</h4>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="text"
              id="username"
              value={email}
              onChange={handleInputChange}
              placeholder="Enter your username"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button text="Register" value="submit" onClick={handleRegister} />
            <p>
              Yes, I have an account?{" "}
              <span
                style={{ color: "green", cursor: "pointer" }}
                onClick={onSwitchToLogin}
              >
                Login
              </span>
            </p>
          </div>
          <div>
            <img src={image2} alt="hhh" className="fitness text-success" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;