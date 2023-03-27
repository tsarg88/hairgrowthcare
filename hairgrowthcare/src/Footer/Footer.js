import React from "react";
import "./Footer.css";
import { Route, Routes, Link } from "react-router-dom";
import f_icon from "../images/icon-facebook-48.png";

export const Footer = () => (
  <footer>
    <body>
      <div className="footerLine"></div>
      <p>
        As an Amazon Associate I may earn a small commission from
        <br /> qualifying purchases
      </p>

      <p id="contactMe">
        Please feel free to{" "}
        <Link to="/contact" target="_blank">
          <a> Contact</a>
        </Link>{" "}
        me if you have any
        <br /> questions/concerns!
        <br />
        <a href="https://www.facebook.com/hairgrowthcare/" target="_blank">
          <img src={f_icon} />
        </a>
      </p>
      <p>Copyright &copy; {new Date().getFullYear()} hairgrwothcare.com</p>
    </body>
  </footer>
);

// export default Footer;
