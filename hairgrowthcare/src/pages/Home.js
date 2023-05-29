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
    <section ref={homeRef} id="homeContainer">
      <div className="mainDiv">
        <h3 id="h3_home">HOME</h3>
        <body>
          <p>
            Hello, thanks for visiting{" "}
            <span style={{ color: "blue", fontWeight: "bold" }}>
              HairGrowthCare!
            </span>
          </p>
          <p>
            In this site you will find useful info and review about how to
            effectively fight hair loss and regrow!
          </p>
          <p>
            Mainly, the content of this site is dedicated to{" "}
            <strong>male pattern hair loss</strong>, but some of the products
            that I am reviewing and recommending can be also used by women.
          </p>
          <p>
            I am also struggling with this issue and have already tried a lot of
            things; I think, I have gained enough experience and knowledge to
            share my <strong>recommendations</strong> which I hope you will find
            them useful -- to stop hair loss and regrow!
          </p>
          <p>
            I would like to note that I do not want and against hair transplant
            surgery; here are just a few reasons:{" "}
            <span style={{ fontStyle: "italic" }}>
              painful procedure; leaves permanent scars; planted hair does not
              really grow and fall.
            </span>
          </p>
          <p>
            However, based on recent developments, research, and trials, I am
            optimistic that new, effective, and painless treatment alternatives
            to hair transplant surgeries will be available in the near future!
          </p>
        </body>
      </div>
      <div id="adPlace"></div>
    </section>
  );
};

// export default Home;
