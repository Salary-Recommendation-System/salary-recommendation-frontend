import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">Salary Information</Link>
        </li>
        <li className="nav-item">
          <Link to="/recommendation">Get Salary Recommendation</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
