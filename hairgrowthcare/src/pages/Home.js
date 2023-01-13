import React from "react";
import { useNav } from "../customHooks/useNav";
import "./Page.css";

export const Home = () => {
  // useNav takes in a navLinkId and returns a ref
  // this ref is used to register the navLinkId that's
  // currently in view, and apply activeClass styling
  // to the corresponding nav childElement

  const homeRef = useNav("Home");

  return (
    <>
      <section ref={homeRef} id="homeContainer">
        <div>
          <h3>HOME</h3>
          <p>This is the home section</p>
        </div>
        <div id="adPlace">
          <img
            src="https://source.unsplash.com/random/600x600/?nature,water"
            alt="unsplash-img"
          />
        </div>
      </section>
    </>
  );
};

// export default Home;
