import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <ul>
          <li><Link to="search">Search</Link></li>
          <li><Link to="saved">Saved</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
