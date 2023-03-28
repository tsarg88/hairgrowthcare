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
            I use <strong>0.5mm</strong> Dermaroller about 3 times per week. I
            do not recommend using needles more than 0.5mm because it will
            increase the risk of injury during application. Also, after research
            and personal trial, I've set a break of ~2-3 days after each
            application; which gives the necessary time for the scalp to recover
            and induce collagen for the growth of new hair. After using
            the Dermaroller I apply minoxidil which in addition to better
            absorption after derma rolling also gives relief to the scalp. The
            first Dermaroller that I use is{" "}
            <a href="https://amzn.to/3y1gyy9" target="_blank">
              Alphaluxy Dermaroller.
            </a>{" "}
            One of the important things about Dermaroller is the number of
            needles and the material; this one has 540 needles(compared two an
            average of 200) and the needles are made of titanium material.
          </p>
          <div className="adPlace">
            <iframe
              sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
              style={{ width: "120px", height: "240px" }}
              marginWidth="0"
              marginHeight="0"
              scrolling="no"
              frameBorder="0"
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=hgc03-20&language=en_US&marketplace=amazon&region=US&placement=B07VR4NKQG&asins=B07VR4NKQG&linkId=3ec1857399a7e62cce110bd0e0dcf61c&show_border=true&link_opens_in_new_window=true"
            ></iframe>
          </div>
          <p>
            Another Dermaroller that I use and recommend is{" "}
            <a href="https://amzn.to/3TQx5yM" target="_blank">
              Dr.Pen
            </a>{" "}
            It has way few needles(128); however, it has great titanium coating
            needles compared to other Dermaroller's needles and the brand is --
            very <strong>established</strong> in this field; that is why its
            quality is very <strong>good!</strong>
          </p>
           
          <div className="adPlace">
            <iframe
              sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
              style={{ width: "120px", height: "240px" }}
              marginWidth="0"
              marginHeight="0"
              scrolling="no"
              frameBorder="0"
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=hgc03-20&language=en_US&marketplace=amazon&region=US&placement=B0B8F126C3&asins=B0B8F126C3&linkId=f489bd65c523e3d452572923518d8fcd&show_border=true&link_opens_in_new_window=true"
            ></iframe>

            {/* <iframe
              sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
              style="width:120px;height:240px;"
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=hgc03-20&language=en_US&marketplace=amazon&region=US&placement=B0B8F126C3&asins=B0B8F126C3&linkId=12c06cdaa6cc6cb292089fc82cde6e79&show_border=true&link_opens_in_new_window=true"
            ></iframe> */}
          </div>
             
        </body>
      </div>
    </section>
  );
};

// export default Home;
