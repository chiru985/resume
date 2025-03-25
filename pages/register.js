import React, { useState } from "react";
import Link from "next/link";
import "../styles/register.css"; // Import CSS

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false); // Success message state
  const [error, setError] = useState(""); // Error message state

  const validateEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const validatePhone = (mobile) => {
    return /^[0-9]{10}$/.test(mobile); // Ensures exactly 10 digits
  };

  const validatePassword = (password) => {
    return password.length >= 6; // Ensures at least 6 characters
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (!validatePhone(mobile)) {
      setError("Mobile number must be exactly 10 digits.");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Create user object
    const userData = { name, email, mobile, password };

    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email is already registered
    if (existingUsers.some((user) => user.email === email)) {
      setError("Email is already registered!");
      return;
    }

    // Add new user and save to localStorage
    existingUsers.push(userData);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    console.log("Registered User:", userData);

    setSuccess(true);
    setName("");
    setEmail("");
    setMobile("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="register-container">
      {success ? (
        <div className="success-message">
          ✅ Registration Successful! 🎉
          <p>You can now <Link href="/login">Login</Link></p>
        </div>
      ) : (
        <div className="register-box">
          <h2>Register</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="register-input"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="register-input"
              required
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="register-input"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="register-input"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="register-input"
              required
            />
            <button type="submit" className="register-button">
              Register
            </button>
          </form>
          <p className="register-text">
            Already have an account? <Link href="/login">Login here</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Register;



