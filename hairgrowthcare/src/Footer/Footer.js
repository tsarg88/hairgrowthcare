import React from "react";
import "./Footer.css";
import { Route, Routes, Link } from "react-router-dom";

export const Footer = () => (
  <footer>
    <p>As an Amazon Associate I may earn from qualifying purchases</p>

    <p id="contactMe">
      Please feel free to{" "}
      <Link to="/contact" target="_blank">
        <a> Contact</a>
      </Link>{" "}
      me if you have any questions/concerns!
    </p>
    <p>Copyright &copy; {new Date().getFullYear()} hairgrwothcare.com</p>
  </footer>
);

// export default Footer;
