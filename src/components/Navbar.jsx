import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">🌿 Lush & Sage</h2>

      <ul className="nav-links">
        <li>Home</li>
        <li>Collections</li>
        <li>New Arrivals</li>
        <li>Contact</li>
        <li> <Link to="/cart"> Cart </Link> </li>
      </ul>
    </nav>
  );
}

export default Navbar;