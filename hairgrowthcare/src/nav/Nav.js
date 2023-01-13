import React from "react";
import NavLink from "./NavLink";
import { navLinks } from "./navLinks.js";
import "./Nav.css";

export const Nav = () => {
  return (
    <nav>
      {navLinks.map(({ navLinkId, scrollToId }, idx) => (
        <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
      ))}
    </nav>
  );
};

// export default Nav;
