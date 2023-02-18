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
            One of the first things that usually we turn into when we notice
            hair loss is the solutions; which could be — topical, foam, or
            pills. I am also including Shampoos, Conditioner, and Pomade(to
            style hair) in this <span style={{ color: "blue" }}>Solutions</span>{" "}
            part of the site.
          </p>
          <p>
            When I first started noticing hair loss about ~10 years ago, I did
            not know much about treatments and on top of that, at that time
            there were not many options available as it is NOW. The most
            “popular” option back then was to “stick” with the{" "}
            <a href="https://www.amazon.com/dp/B0000Y8H3S" target="_blank">
              Rogaine
            </a>{" "}
            brand. The main ingredient responsible to stop hair loss and regrow
            is minoxidil. I did not pay much attention that there are different
            dosages of minoxidil: 2%, 5%, and even 15%. Also, after doing some
            research, I’ve found out that <strong>5% minoxidil</strong> is
            actually better(!!! than 10% and 15%) - here is the research and
            proof on that:{" "}
            <a href="https://pubmed.ncbi.nlm.nih.gov/31403367/" target="_blank">
              https://pubmed.ncbi.nlm.nih.gov/31403367/ 
            </a>
          </p>
             
          <p>
            Also, as now there are available much <strong>more</strong> brands
            that offer the same minoxidil(
            <a
              href="https://www.amazon.com/Keeps-Minoxidil-Topical-Solution-bottles/dp/B099HVJRZ1"
              target="_blank"
            >
              {" "}
              Keeps
            </a>
            ,{" "}
            <a
              href="https://www.amazon.com/Strength-Regrowth-Treatment-Minoxidil-Unscented/dp/B09H3R8Y7P"
              target="_blank"
            >
              Hims
            </a>
            , etc), it became obvious, that basically, the only real difference
            is the <strong>price!</strong> That is why I am recommending 
            <a href="https://www.amazon.com/dp/B008BMOEGA" target="_blank">
              Kirkland!
            </a>
             Because, it has the same main ingredients including of course
            minoxidil that 
            <a href="https://www.amazon.com/dp/B0000Y8H3S" target="_blank">
              Rogaine
            </a>
            (and other brands have) has — but it is much more cheaper! As of
            writing this: 3 months supply of{" "}
            <a href="https://www.amazon.com/dp/B0000Y8H3S" target="_blank">
              Rogaine
            </a>{" "}
            solution costs $42.72 whereas 6 months of Kirkland's costs only $30;
            so that is why for the minoxidil part of my recommendations, I
            recommend using — 
            <a href="https://www.amazon.com/dp/B008BMOEGA" target="_blank">
              Kirkland Minoxidil 5% Extra Strength
            </a>
            {/* <div className="adPlace">
        
              <iframe
                style={{ width: "500px", height: "500px" }}
                marginwidth="0"
                marginheight="0"
                scrolling="no"
                frameborder="0"
                src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=hatro-20&marketplace=amazon&region=US&placement=B008BMOEGA&asins=B008BMOEGA&linkId=2747db84071ed549b5d81ff7076af287&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"
              ></iframe>
            </div> */}
          </p>
          <p>
            I heard about Finasteride as a hair loss treatment relatively
            recently; about ~2 years ago. It was first used to treat benign
            prostatic hyperplasia in men; however, relatively recently it is
            being produced as a medication to treat hair loss as well.
          </p>
          <p>
            As they were offering it as a prescription pill -- I was "at once"
            against it; because among other reasons: taking a pill
            can potentially increase <strong>side effects</strong>, especially
            compared to topical or foam alternatives.
          </p>
          <p>
            But about 6 months ago, I noticed that a lot of brands have started
            offering topical Finasteride as an alternative to pills. I started
            doing quick research and learned that the main side effect is
            sexual; which is caused by decreasing DHT(the main sexual hormone of
            males) levels by Finasteride. But after reading reviews, I got
            "convinced" that topical in comparison to pills have lower side
            effects rates. So I've decided to give it a try. I have signed up
            for a subscription plan and got approved for the prescription of
            topical finasteride with 0.3% concentration. However, after just
            using it for about a month, I noticed sexual side effects; in
            particular, I was having acute pain during orgasm. I
            immediately canceled my subscription and stopped using Finasteride!
            Fortunately for me, the sides ended within a week after
            stopping applying topical FInasteride!{" "}
          </p>
          <p>
            And then after doing proper research, I have learned that blocking
            DHT with <strong>finasteride</strong> if you do not have prostate
            issues -- is actually a bad idea; because of its{" "}
            <strong>sexual side effects!</strong>
          </p>
          <p>
            Then I started to look for finasteride <strong>alternatives</strong>
            ; or in particular -- healthy/organic/natural ways to block the DHT.
            This led me to find{" "}
            <a
              href="https://www.amazon.com/Hair-Developed-Dermatologists-Experience-Healthier/dp/B07CRNLRPQ"
              target="_blank"
            >
              Shapiro MD Leave-In Daily Foam
            </a>
            . It has DHT Fighting Vegan Formula which consists of{" "}
            <strong>natural</strong> ingredients: green tea, saw palmetto berry,
            and caffeine. I apply it 3-4 times per week between my daily
            minoxidil applications. My first recommendation on{" "}
            <strong>DHT blocking</strong> is using 
            <a
              href="https://www.amazon.com/Hair-Developed-Dermatologists-Experience-Healthier/dp/B07CRNLRPQ"
              target="_blank"
            >
              Shapiro MD Leave-In Daily Foam
            </a>
             as an alternative to -- <strong>Finasteride</strong> -- that have
            side effects, most notably -- sexual!
            {/* <div className="adPlace">
              <iframe
                style={{ width: "500px", height: "500px" }}
                marginwidth="0"
                marginheight="0"
                scrolling="no"
                frameborder="0"
                src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=hatro-20&marketplace=amazon&region=US&placement=B07CRNLRPQ&asins=B07CRNLRPQ&linkId=2747db84071ed549b5d81ff7076af287&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"
              ></iframe>
            </div> */}
          </p>
          <p>
            The next remaining recommendations in this 
            <span style={{ color: "blue" }}>Solutions</span> section will be
            Shampoos, a Conditioner, and hair styling Pomade -- that I think are
            also <strong>vital</strong> to <strong>bundle</strong> with other
            options to maximize the efficiency of the treatment!
          </p>
          <p>
            I recommend using{" "}
            <a
              href="https://www.amazon.com/Keeps-Thickening-Shampoo-Thicker-Looking/dp/B0994WXS42"
              target="_blank"
            >
              Keeps Shampoo
            </a>{" "}
            and{" "}
            <a href="https://www.amazon.com/dp/B0994YMK1Z" target="_blank">
              Conditioner
            </a>{" "}
            because they both contain 4 key <strong>natural</strong>{" "}
            ingredients: saw palmetto(natural DHT-blocker), biotin(promotes
            keratin production), green tea(improves hair quality), and
            caffeine(stimulates hair follicles).The first thing that you will
            notice when using 
            <a href="https://www.amazon.com/dp/B0994YMK1Z" target="_blank">
              Keeps Conditioner
            </a>{" "}
            is a very distinct/cool green tea smell -- which I do really like!
          </p>
          <p>
            As you can see adding Keeps Shampoo and Conditioner to your{" "}
            <strong>regimen</strong> adds up natural DHT blocking; which again,
            I think is an excellent <strong>alternative</strong> to Finasteride!
          </p>
          {/* <div className="adPlace_keeps">
            <iframe
              style={{ width: "500px", height: "500px" }}
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=hatro-20&marketplace=amazon&region=US&placement=B0994WXS42&asins=B0994WXS42&linkId=2747db84071ed549b5d81ff7076af287&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"
            ></iframe>
            <iframe
              style={{ width: "500px", height: "500px" }}
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=hatro-20&marketplace=amazon&region=US&placement=B0994YMK1Z&asins=B0994YMK1Z&linkId=2747db84071ed549b5d81ff7076af287&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"
            ></iframe>
             
          </div> */}
        </body>
      </div>
    </section>
  );
};

// export default Home;
