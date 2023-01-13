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
      <div>
        <h3 id="h3">HOME</h3>
        <body>
          <p>Hello, thanks for visiting!</p>
          <p>
            In this site you will find useful info and review about how to
            effectively fight hair loss and regrow!
          </p>
          <p>
            Mainly, the content of this site is dedicated to male pattern hair
            loss, but some of the products that I am reviewing and recommending
            can be also used by women.
          </p>
          <p>
            I am also struggling with this issue and have already tried a lot of
            things, I think, I have gained enough experience and knowledge to
            share my recommendations which I hope you will use them to fight
            hair loss and regrow!
          </p>
          <p>
            Also, I would like to note that I do NOT want and AGAINST hair
            transplant surgery, here are just a few reasons: painful procedure;
            leaves permanent scars; planted hair does not really grow and fall.
          </p>
          <p>
            However I have some optimistic hope to PRP(platelet-rich plasma)
            treatment(taking plasma from your blood and injecting it into your
            scalp to stimulate hair growth) and I hope that they will improve in
            the future with more concrete results to showcase before trying it!
          </p>
        </body>
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
