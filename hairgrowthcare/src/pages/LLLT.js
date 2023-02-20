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
      <div className="mainDiv">
        <h3 id="h3">LLLT</h3>
        <body>
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
              href="https://www.amazon.com/Hair-Growth-Laser-Cap-Red-Light-Therapy/dp/B07M5X4D3P"
              target="_blank"
            >
              iRestore Professional 282Laser Hair Growth System.
            </a>
          </p>{" "}
          <p>
            They have very good customer service; you can simply contact them
            even <strong>after</strong> 6 months of the initial guarantee
            period(if you're not happy with the result), and they will offer to
            extend the warranty or price reduction!
          </p>
          <div className="adPlace">
            <iframe
              style={{ width: "500px", height: "500px" }}
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=hatro-20&marketplace=amazon&region=US&placement=B07M5X4D3P&asins=B07M5X4D3P&linkId=2747db84071ed549b5d81ff7076af287&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"
            ></iframe>
          </div>
        </body>
      </div>
    </section>
  );
};

// export default Home;
