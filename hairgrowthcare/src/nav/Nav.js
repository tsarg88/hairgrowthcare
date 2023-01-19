import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import NavLink from "./NavLink";
import { navLinks } from "./navLinks.js";
import "./Nav.css";
import Contact from "../Contact/Contact";

const styles = {
  a: {
    textDecoration: "none",
    color: "black",
  },
};

export const Nav = () => {
  return (
    <nav>
      {navLinks.map(({ navLinkId, scrollToId }, idx) => (
        <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
      ))}
      <Routes>
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Link to="/contact" target="_blank">
        Contact
      </Link>
    </nav>
  );
};

// export default Nav;
