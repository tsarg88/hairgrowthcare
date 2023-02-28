import React from "react";
import { useNav } from "../customHooks/useNav";
import "./Page.css";

export const Dermaroller = () => {
  // useNav takes in a navLinkId and returns a ref
  // this ref is used to register the navLinkId that's
  // currently in view, and apply activeClass styling
  // to the corresponding nav childElement

  const homeRef = useNav("Dermaroller");

  return (
    <section ref={homeRef} id="dermarollerContainer">
      <div className="dermaroller_line"></div>
      <div className="mainDiv">
        <h3 id="h3_dermaroller">Dermaroller</h3>
        <body>
          <p>
            Using the Dermaroller(also known as a micro-needling device) for
            hair treatment is something that I wish I had known earlier!
          </p>
             
          <p>
            A Dermaroller(collagen induction therapy (CIT), also known as
            micro-needling) is basically a tool with a{" "}
            <strong>roller and micro-needles</strong> that you will need to run
            the roller across the scalp.
          </p>
               
          <p>
            Study shows that combining derma rolling with minoxidil has more
            than 50% improvement versus only using minoxidil! You can see that
            study here:{" "}
            <a
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3746236/"
              target="_blank"
            >
              https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3746236/
            </a>
          </p>
          <p>
            I use <strong>0.5mm</strong> Dermaroller about 2 times per week. I
            do not recommend using needles more than 0.5mm because it will
            increase the risk of injury during application. Also, after research
            and personal trial, I've set a break of ~2-3 days after each
            application; which gives the necessary time for the scalp to recover
            and induce collagen for the growth of new hair. After using
            the Dermaroller I apply minoxidil which in addition to better
            absorption after derma rolling also gives relief to the scalp. The
            first Dermaroller that I use is{" "}
            <a
              href="https://www.amazon.com/Derma-Roller-Titanium-Regrowth-Growth/dp/B07VR4NKQG"
              target="_blank"
            >
              Alphaluxy Dermaroller.
            </a>{" "}
            One of the important things about Dermaroller is the number of
            needles and the material; this one has 540 needles(compared two an
            average of 200) and the needles are made of titanium material.
          </p>
          <div className="adPlace">
            <iframe
              style={{ width: "500px", height: "500px" }}
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=hatro-20&marketplace=amazon&region=US&placement=B07VR4NKQG&asins=B07VR4NKQG&linkId=2747db84071ed549b5d81ff7076af287&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"
            ></iframe>
          </div>
          <p>
            Another Dermaroller that I use and recommend is{" "}
            <a
              href="https://www.amazon.com/Microneedling-Derma-Roller-Dr-Pen-Dermaroller/dp/B0B8F126C3"
              target="_blank"
            >
              Dr.Pen
            </a>{" "}
            It has way few needles(128); however, it has great titanium coating
            needles compared to other Dermaroller's needles and the brand is --
            very <strong>established</strong> in this field; that is why its
            quality is very <strong>good!</strong>
          </p>
           
          <div className="adPlace">
            <iframe
              style={{ width: "500px", height: "500px" }}
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=hatro-20&marketplace=amazon&region=US&placement=B0B8F126C3&asins=B0B8F126C3&linkId=2747db84071ed549b5d81ff7076af287&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"
            ></iframe>
          </div>
             
        </body>
      </div>
    </section>
  );
};

// export default Home;
