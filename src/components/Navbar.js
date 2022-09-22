import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

export const Navbar = () => {
  const [isOpen, setOpen] = useState(true);
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div>
          <div className="navbar-start">
            <NavLink 
            className="navbar-item" 
            activeClassName="is-chosen"
            to="/Meditation-React-Deploy/">
              Home
            </NavLink> 
  
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/Meditation-React-Deploy/benefits"
            >
              Benefits
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/Meditation-React-Deploy/videos"
            >
              Videos
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/Meditation-React-Deploy/links"
            >
              Links
            </NavLink>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;