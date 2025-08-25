import React from "react";
import { useNav } from "../customHooks/useNav";
import "./Page.css";
import irestore from "../images/irestore.png"

export const Lllt = () => {
  // useNav takes in a navLinkId and returns a ref
  // this ref is used to register the navLinkId that's
  // currently in view, and apply activeClass styling
  // to the corresponding nav childElement

  const homeRef = useNav("LLLT");

  return (
    <section ref={homeRef} id="llltContainer">
      <div className="llltLine"></div>
      <div className="mainDiv">
        <h3 id="h3_lllt">LLLT</h3>
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
            Using(and combining with other treatments) LLLT(
            <strong>Low-level laser therapy</strong>) device is going to be my
            last recommendation. After hearing ~2 years ago about this
            treatment, I was quite skeptical. But after doing some research with{" "}
            <strong>before-after</strong> pics, my hope started to appear. One
            of the main factors of any LLLT device is the{" "}
            <strong>number</strong> of lasers -- which are basically{" "}
            <strong>stimulating</strong> hair follicles to promote hair growth
            and prevent hair loss. And that is exactly the main reason that I
            have chosen --{" "}
            <a
              href="https://www.amazon.com/dp/B07M5X4D3P/ref=cm_sw_r_as_gl_api_gl_i_X584KRMV04VKDATDB778?linkCode=ml1&tag=hgc03-20"
              target="_blank"
            >
              iRestore Professional 282Laser Hair Growth System.
            </a>
          </p>{" "}
          <p>
            They have very good customer service; you can simply contact them
            even <strong>after</strong> 6 months of the initial guarantee
            period(if you're not happy with the result), and they will offer to:
            extend the warranty, price reduction or refund!
          </p>
          <div className="irestore">
            <a href="https://amzn.to/3yEgacn" target="_blank" rel="noopener noreferrer">
              <img src={irestore} alt="Irestore" />
            </a>
            {/* <iframe
              sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
              style={{ width: "120px", height: "240px" }}
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=hgc03-20&language=en_US&marketplace=amazon&region=US&placement=B07M5X4D3P&asins=B07M5X4D3P&linkId=84f65c24bcd6871106c9a5125d6c9b66&show_border=true&link_opens_in_new_window=true"
            ></iframe> */}
          </div>
        </body>
      </div>
    </section>
  );
};

// export default Home;
