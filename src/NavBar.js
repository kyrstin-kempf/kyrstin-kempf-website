import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
      <nav className="nav-menu">
        <NavLink end to="/">Home</NavLink>
        <NavLink end to="/about">About</NavLink>
        <NavLink end to="/portfolio">Portfolio</NavLink>
        <NavLink end to="/contact">Contact</NavLink>
      </nav>
  );
}

export default NavBar;