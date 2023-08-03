import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-full.svg";
import github from '../assets/gh.png'
import medium from '../assets/md.png'


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
                <li><a href="https://github.com/kyrstin-kempf" target="_blank" rel="noreferrer noopener" title="Github"><img src={github} alt='github'/></a></li>
                <li id="medium-icon"><a href="https://medium.com/@kyrstin.kempf" target="_blank" rel="noreferrer noopener" title="Medium Blog"><img src={medium} alt='medium'/></a></li>
            </ul>
        </div>
      </nav>
  );
}

export default NavBar;