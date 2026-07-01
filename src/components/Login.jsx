import { useState } from "react";
import { supabase } from "./supabase";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Welcome back 🌿");
    navigate("/");
  }

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>🌿 Lush & Sage</h1>

        <h2>Welcome Back</h2>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p>
          Don't have an account?
        </p>

        <Link to="/signup">
          Create Account
        </Link>

      </div>
    </div>
  );
}

export default Login;