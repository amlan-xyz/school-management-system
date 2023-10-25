import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar">
      <header className="nav__header">School Management System</header>
      <nav className="nav__list">
        <Link className="nav__link" to="/">
          Students
        </Link>
        <Link className="nav__link" to="/teachers">
          Teachers
        </Link>
        <Link className="nav__link" to="/classes">
          Classes
        </Link>
        <Link className="nav__link" to="/school">
          School
        </Link>
      </nav>
    </div>
  );
};
