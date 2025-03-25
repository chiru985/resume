import React, { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter for navigation
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Next.js router for redirection

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Get stored users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Find user with matching email and password
    const user = storedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      console.log("Login successful!");
      localStorage.setItem("loggedInUser", JSON.stringify(user)); // Store logged-in user
      router.push("/index2"); // Redirect to home page
    } else {
      setError("Invalid email or password. Please try again!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link href="/register" className="register-link">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
 