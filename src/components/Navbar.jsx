import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";

function Navbar({ search, setSearch }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function logout() {
    await supabase.auth.signOut();
    navigate("/login");
  }

  return (
    <nav className="navbar">

      <h2 className="logo">🌿 Lush & Sage</h2>

      <ul className="nav-links">

        <li>Home</li>

        <li>Collections</li>

        <li>New Arrivals</li>

        <li>Contact</li>

        <li className="search-box">
          🔍
          <input
  type="text"
  placeholder="Search..."
  value={search}
  onChange={(e) => {
    setSearch(e.target.value);

    document
      .getElementById("products")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }}
/>
        </li>

        <li>
          <Link to="/cart">🛒 Cart</Link>
        </li>

        {user ? (
          <>
            <li>👋 {user.email.split("@")[0]}</li>

            <li
              onClick={logout}
              style={{cursor:"pointer"}}
            >
              Logout
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}

      </ul>

    </nav>
  );
}

export default Navbar;