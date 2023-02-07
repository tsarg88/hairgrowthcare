import React, { useEffect } from "react";

import "./Confirmation.css";
import { Link } from "react-router-dom";
import { Nav } from "../nav/Nav";

export const Confirmation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <div className="main">
        {/* <h1>
          Hello, thanks again for visiting{" "}
          <span id="siteName">hairgrowthcare.com</span>!
        </h1> */}

        <Link to="/" target="_blank">
          <Nav />
        </Link>

        <h2>
          Thank you, we've <h id="color">received</h> your message and will get
          back to you!
        </h2>
      </div>
    </section>
  );
};

export default Confirmation;
