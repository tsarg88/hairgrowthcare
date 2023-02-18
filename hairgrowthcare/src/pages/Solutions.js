import React from "react";
import { useNav } from "../customHooks/useNav";
import "./Page.css";
import kirkland from "../images/kirkland.jpg";

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
        <body>
          <p>
            One of the first things that we usually turn to when we notice hair
            loss is solutions, which could be topical, foam, or pills. When I
            first started noticing hair loss about 10 years ago, I didn't know
            much about treatments and there weren't many options available. The
            most popular option was to stick with Rogaine, whose main
            ingredient, minoxidil, is responsible for stopping hair loss and
            promoting regrowth.{" "}
          </p>
          <p>
            However, I soon learned that there are different dosages of
            minoxidil, including 2%, 5%, and 15%, and that Rogaine mostly only
            works at the vertex. After some research, I found that 5% minoxidil
            is actually better than 10% and 15%.{" "}
          </p>
          <p>
            Overall, Rogaine is a good choice, and I would highly recommend
            using Extra Strength 5%. However, I also recommend using Keeps for
            several reasons. First, there are now other options available
            besides minoxidil. Second, Keeps has a great bundle available that
            includes not just minoxidil, but also a very good Shampoo and
            Conditioner specifically designed to stop hair loss and promote
            healthy hair growth.{" "}
          </p>
          <p>
            That's why I recommend Keeps, because you can buy, besides Extra
            Strength 5% minoxidil, a good Shampoo and Conditioner to help stop
            hair loss and promote healthy hair growth. tuqhan
          </p>
        </body>
      </div>
      <div className="adPlace">
        {/* <a href="https://www.amazon.com/gp/product/B008BMOEGA" target="_blank">
          <img src={kirkland} alt="ad-image" />
        </a> */}
        <iframe
          style={{ width: "500px", height: "500px" }}
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=hatro-20&marketplace=amazon&region=US&placement=B008BMOEGA&asins=B008BMOEGA&linkId=2747db84071ed549b5d81ff7076af287&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"
        ></iframe>
      </div>
    </section>
  );
};

// export default Home;
