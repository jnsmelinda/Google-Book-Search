import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <ul>
          <li id="logo">Google Books</li>
          <li><Link to="search" id="link">Search</Link></li>
          <li><Link to="saved" id="link">Saved</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
