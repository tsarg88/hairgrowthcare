import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import NavLink from "./NavLink";
import { navLinks } from "./navLinks.js";
import "./Nav.css";
import Contact from "../Contact/Contact";
import { Confirmation } from "../pages/Confirmation";

// const styles = {
//   a: {
//     textDecoration: "none",
//     color: "black",
//   },
// };

export const Nav = () => {
  return (
    <nav>
      {navLinks.map(({ navLinkId, scrollToId }, idx) => (
        <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
      ))}

      <Link to="/contact" target="_blank">
        <span id="contact">
          <a> Contact</a>
        </span>
      </Link>
    </nav>
  );
};

// export default Nav;
