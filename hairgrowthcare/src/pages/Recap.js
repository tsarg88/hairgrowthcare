import React from "react";
// import { useNav } from "../customHooks/useNav";
import "./Page.css";
import { Route, Routes, Link } from "react-router-dom";

export const Recap = () => {
  // useNav takes in a navLinkId and returns a ref
  // this ref is used to register the navLinkId that's
  // currently in view, and apply activeClass styling
  // to the corresponding nav childElement

  //   const homeRef = useNav("LLLT");

  return (
    <section id="recapContainer">
      <div className="recapLine"></div>
      <div className="mainDiv">
        <h3 id="h3" style={{ color: "red" }}>
          Recap
        </h3>
        <body>
          <p>
            In the end, I would like to once again emphasize that{" "}
            <strong>combining</strong> multiple approaches into a{" "}
            <strong>regimen</strong> is better than just sticking with one
            solution, especially since there are really a lot of options out
            there nowadays.
          </p>

          <p>
            Here is one possible regimen that you could set up and use:<br></br>{" "}
            <strong>Morning:</strong> take a shower with{" "}
            <a
              href="https://www.amazon.com/Keeps-Thickening-Shampoo-Thicker-Looking/dp/B0994WXS42"
              target="_blank"
            >
              Keeps Shampoo
            </a>{" "}
            or{" "}
            <a href="https://www.amazon.com/dp/B0994YMK1Z" target="_blank">
              Nizoral
            </a>{" "}
            (I would recommend using Nizoral 2-3 times per week and using Keeps
            Shampoo the remaining days). After each shampoo, use{" "}
            <a href="https://www.amazon.com/dp/B0994YMK1Z" target="_blank">
              Keeps Conditioner
            </a>{" "}
            and then apply (on dry hair){" "}
            <a href="https://www.amazon.com/dp/B008BMOEGA" target="_blank">
              Kirkland Minoxidil 5% Extra Strength
            </a>
            .<br></br>
          </p>

          <p>
            <strong>Afternoon:</strong> apply{" "}
            <a
              href="https://www.amazon.com/Hair-Developed-Dermatologists-Experience-Healthier/dp/B07CRNLRPQ"
              target="_blank"
            >
              Shapiro MD Leave-In Daily Foam;
            </a>{" "}
            <br></br>3 times (or every other day) per week use{" "}
            <a
              href="https://www.amazon.com/Hair-Growth-Laser-Cap-Red-Light-Therapy/dp/B07M5X4D3P"
              target="_blank"
            >
              iRestore Professional 282 Laser Hair Growth System
            </a>
            .<br></br>
          </p>

          <p>
            <strong>Night (or before bed):</strong> 2-3 times per week use{" "}
            <a
              href="https://www.amazon.com/Derma-Roller-Titanium-Regrowth-Growth/dp/B07VR4NKQG"
              target="_blank"
            >
              Alphaluxy Dermaroller
            </a>{" "}
            (run the roller across the scalp in multiple directions:
            horizontally, vertically, and diagonally for about ~2-3 minutes);
            <br></br>
            apply{" "}
            <a href="https://www.amazon.com/dp/B008BMOEGA">
              Kirkland Minoxidil 5% Extra Strength
            </a>
          </p>

          <p>
            Thanks again for visiting, if you have any questions, please use
            this{" "}
            <Link to="/contact" target="_blank">
              <a> Contact</a>
            </Link>{" "}
            page!
          </p>
        </body>
      </div>
    </section>
  );
};

// export default Home;
