import React from "react";
import { useNav } from "../customHooks/useNav";
import "./Page.css";

export const Solutions = () => {
  // useNav takes in a navLinkId and returns a ref
  // this ref is used to register the navLinkId that's
  // currently in view, and apply activeClass styling
  // to the corresponding nav childElement

  const homeRef = useNav("Solutions");

  return (
    <section ref={homeRef} id="solutionContainer">
      <div>
        <h3 id="h3">Solutions</h3>
        <p>This is the Solutions section</p>
      </div>
      <div id="adPlace">
        {/* <img
          src="https://source.unsplash.com/random/600x600/?nature,water"
          alt="unsplash-img"
        /> */}
      </div>
    </section>
  );
};

// export default Home;
