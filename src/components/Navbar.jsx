import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Alvina.</div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Beranda</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Tentang Alvina</NavLink>
        <NavLink to="/hobbies" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Hobi</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Kontak</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;