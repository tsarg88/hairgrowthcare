import React from "react";
import { useNav } from "../customHooks/useNav";
import "./Page.css";

export const Lllt = () => {
  // useNav takes in a navLinkId and returns a ref
  // this ref is used to register the navLinkId that's
  // currently in view, and apply activeClass styling
  // to the corresponding nav childElement

  const homeRef = useNav("LLLT");

  return (
    <section ref={homeRef} id="llltContainer">
      <div>
        <h3 id="h3">LLLT</h3>

        <p>This is the LLLT section</p>
      </div>
      <div id="adPlace">
        <img
          src="https://source.unsplash.com/random/600x600/?nature,water"
          alt="unsplash-img"
        />
      </div>
    </section>
  );
};

// export default Home;
