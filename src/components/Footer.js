import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-full.svg";

function Footer() {

  return (
    <div className="footer-menu">
        <nav>
            <div className="footer-home">
                <NavLink end to="/" id="home-link"><img src={logo} alt='Home'/></NavLink>
            </div>
            <div className="footer-main">
                <NavLink end to="/about">About</NavLink>
                <NavLink end to="/portfolio">Portfolio</NavLink>
                <NavLink end to="/contact">Contact</NavLink>
            </div>
        </nav>
        <div className="footer-copyright">
            <p>© 2023 Kyrstin Kempf</p>
        </div>
    </div>
  );
}

export default Footer;