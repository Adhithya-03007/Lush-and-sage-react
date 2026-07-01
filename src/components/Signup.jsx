import { useState } from "react";
import { supabase } from "./supabase";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e) {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Account created successfully 🌿");
    navigate("/login");
  }

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>🌿 Lush & Sage</h1>

        <h2>Create Account</h2>

        <form onSubmit={handleSignup}>

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
            Sign Up
          </button>

        </form>

        <p>Already have an account?</p>

        <Link to="/login">
          Login
        </Link>

      </div>
    </div>
  );
}

export default Signup;