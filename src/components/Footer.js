import React from "react";
import { NavLink } from "react-router-dom";
import footerLogo from "../assets/footer-logo.svg";

function Footer() {

  return (
    <div className="footer">
        <nav className="footer-menu">
            <div className="footer-home">
                <NavLink end to="/" id="footer-link"><img src={footerLogo} alt='Home'/></NavLink>
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