import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/assets/logo-full.svg";

function NavBar() {

  return (
      <nav className="nav-menu">
        <div className="nav-home">
            <NavLink end to="/" id="home-link"><img src={logo} alt='Home'/></NavLink>
        </div>
        <div className="nav-main">
            <NavLink end to="/about">About</NavLink>
            <NavLink end to="/portfolio">Portfolio</NavLink>
            <NavLink end to="/contact">Contact</NavLink>
        </div>
        <div className="nav-links">
            <ul>
                <li><a href="https://github.com/kyrstin-kempf" target="_blank">a</a></li>
                <li><a href="#" target="_blank">b</a></li>
                <li><a href="#" target="_blank" id="nav-end">c</a></li>
            </ul>
        </div>
      </nav>
  );
}

export default NavBar;