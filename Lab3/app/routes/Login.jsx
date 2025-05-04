import { useContext, useState } from "react";

export function meta() {
  return [
    { title: "Login" },
    { name: "description", content: "Website for Books App" },
  ];
}

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = (e) => {
      e.preventDefault();
      console.log("Logging in with:", { username, password });
    };
  
    const handleRegister = () => {
      console.log("Navigating to register...");
    };
  
    const handleResetPassword = () => {
      console.log("Navigating to reset password...");
    };
  
    return (
      <main className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="login-options">
          <button className="register-btn" onClick={handleRegister}>
            Register
          </button>
          <button className="reset-btn" onClick={handleResetPassword}>
            Reset Password
          </button>
        </div>
      </main>
    );
  }