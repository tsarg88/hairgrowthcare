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
      <div className="mainDiv_recap">
        <h3 id="h3_recap" style={{ color: "red" }}>
          RECAP
        </h3>
        <body>
        <p
        style={{
        textAlign: "center",
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#dc2626", // red
        marginTop: "1.5rem",
        }}
      >
        🚀 This site/domain is for sale — Please contact:{" "}
      <a
        href="mailto:sartigran88@gmail.com"
        style={{ textDecoration: "underline", color: "#2563eb" }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#1e40af")} // hover effect
        onMouseOut={(e) => (e.currentTarget.style.color = "#2563eb")}
      >
        sartigran88@gmail.com
      </a>
    </p>
          <p>
            In the end, I would like to once again emphasize that{" "}
            <strong>combining</strong> multiple approaches into a{" "}
            <strong>regimen</strong> is better than just sticking with one
            solution; especially, since there are really a lot of options out
            there nowadays.
          </p>

          <p>
            Here is one possible regimen that you could set up and use:<br></br>{" "}
            <strong>Morning:</strong> take a shower with{" "}
            <a
              href="https://www.amazon.com/dp/B0994WXS42/ref=cm_sw_r_as_gl_api_gl_i_QR35GX821RJNJMQVFB7A?linkCode=ml1&tag=hgc03-20"
              target="_blank"
            >
              Keeps Shampoo
            </a>{" "}
            or{" "}
            <a
              href="https://www.amazon.com/dp/B00AINMFAC/ref=cm_sw_r_as_gl_api_gl_i_GEB7Z0ATNRM5BSRTY28Z?linkCode=ml1&tag=hgc03-20"
              target="_blank"
            >
              Nizoral
            </a>{" "}
            (I would recommend using Nizoral 2-3 times per week and using Keeps
            Shampoo the remaining days). After each shampoo, use{" "}
            <a
              href="https://www.amazon.com/dp/B0994YMK1Z/ref=cm_sw_r_as_gl_api_gl_i_K2R99C4RN2K8F9Y7WTD1?linkCode=ml1&tag=hgc03-20"
              target="_blank"
            >
              Keeps Conditioner
            </a>{" "}
            and then apply (on dry hair){" "}
            <a
              href="https://amzn.to/44YFhCX"
              target="_blank"
            >
              Kirkland Minoxidil 5% Extra Strength
            </a>
            .<br></br>
          </p>

          <p>
            <strong>Afternoon:</strong> apply{" "}
            <a
              href="https://www.amazon.com/dp/B07CRNLRPQ/ref=cm_sw_r_as_gl_api_gl_i_3DMTVXARYBPJT0WHX0HN?linkCode=ml1&tag=hgc03-20"
              target="_blank"
            >
              Shapiro MD Leave-In Daily Foam<strong>;</strong>
            </a>{" "}
            <br></br>3 times (or every other day) per week use{" "}
            <a
              href="https://www.amazon.com/dp/B07M5X4D3P/ref=cm_sw_r_as_gl_api_gl_i_X584KRMV04VKDATDB778?linkCode=ml1&tag=hgc03-20"
              target="_blank"
            >
              iRestore Professional 282 Laser Hair Growth System
            </a>
            .<br></br>
          </p>

          <p>
            <strong>Night (or before bed):</strong> 2-3 times per week use{" "}
            <a
              href="https://amzn.to/44ZRnM6"
              target="_blank"
            >
               KOI BEAUTY Dermaroller
            </a>{" "}
            {/* or{" "}
            <a
              href="https://www.amazon.com/dp/B0B8F126C3/ref=cm_sw_r_as_gl_api_gl_i_E8EF3TVHFG2ZMQWFP808?linkCode=ml1&tag=hgc03-20"
              target="_blank"
            >
              {" "}
              Dr.Pen
            </a> */}
            (run the roller across the scalp in multiple directions:
            horizontally, vertically, and diagonally for about ~2-3 minutes);
            <br />
            apply{" "}
            <a
              href="https://amzn.to/44YFhCX"
              target="_blank"
            >
              Kirkland Minoxidil 5% Extra Strength
            </a>
            <br />
            <div className="derm_rec">
              <br />I would recommend using the Dermaroller after taking shower
              and drying out with dryer -- as the application would be more
              smooth and painless!
            </div>
          </p>
          <br />
          <p>
            Thanks again for visiting! I do really hope that my recommendations
            will help you to <strong>stop</strong> hair loss and{" "}
            <strong>regrow!</strong> <br />
            if you have any question/concerns, please use this{" "}
            <Link to="/contact" target="_blank">
              <a> Contact</a>
            </Link>{" "}
            page! or visit our{" "}
            <a href="https://www.facebook.com/hairgrowthcare/" target="_blank">
              Facebook page!
            </a>
          </p>
          <p
        style={{
        textAlign: "center",
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#dc2626", // red
        marginTop: "1.5rem",
        }}
      >
        🚀 This site/domain is for sale — Please contact:{" "}
      <a
        href="mailto:sartigran88@gmail.com"
        style={{ textDecoration: "underline", color: "#2563eb" }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#1e40af")} // hover effect
        onMouseOut={(e) => (e.currentTarget.style.color = "#2563eb")}
      >
        sartigran88@gmail.com
      </a>
    </p>
        </body>
      </div>
    </section>
  );
};

// export default Home;
