import React from "react";
import "./Footer.css";
import { Route, Routes, Link } from "react-router-dom";

export const Footer = () => (
  <footer>
    <body>
      <div className="footerLine"></div>
      <p>
        As an Amazon Associate I may earn from
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
      </p>
      <p>Copyright &copy; {new Date().getFullYear()} hairgrwothcare.com</p>
    </body>
  </footer>
);

// export default Footer;
