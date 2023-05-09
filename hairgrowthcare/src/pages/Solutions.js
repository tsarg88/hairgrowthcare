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
      <div className="solutionLine"></div>
      <div className="mainDiv">
        <h3 id="h3_solutions">Solutions</h3>
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
            <a
              href="https://www.amazon.com/dp/B0000Y8H3S/ref=cm_sw_r_as_gl_api_gl_i_E9GARC3C204RMBVZY9BS?linkCode=ml1&tag=hgc03-20"
              target="_blank"
            >
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
            With so <strong>many</strong> brands now offering minoxidil, such as
            <a
              href="https://www.amazon.com/dp/B099HVJRZ1/ref=cm_sw_r_as_gl_api_gl_i_E18AYBZ1WN3W3N9FP394?linkCode=ml1&tag=hgc03-20"
              target="_blank"
            >
              {" "}
              Keeps
            </a>
            ,{" "}
            <a
              href="https://www.amazon.com/dp/B09H3R8Y7P/ref=cm_sw_r_as_gl_api_gl_i_9B5Y0EEGJZJRMSCN2TEW?linkCode=ml1&tag=hgc03-20"
              target="_blank"
            >
              Hims
            </a>
            , etc., it became obvious, that basically, the only real difference
            is the <strong>price!</strong> That is why I am recommending 
            <a
              href="https://www.amazon.com/dp/B008BMOEGA/ref=cm_sw_r_as_gl_api_gl_i_HNEEBCB2Z2P4J5ZNB6D9?linkCode=ml2&tag=hgc03-20"
              target="_blank"
            >
              Kirkland!
            </a>
             Because, it has the same main ingredients including of course
            minoxidil that 
            <a
              href="https://www.amazon.com/dp/B0000Y8H3S/ref=cm_sw_r_as_gl_api_gl_i_E9GARC3C204RMBVZY9BS?linkCode=ml1&tag=hgc03-20"
              target="_blank"
            >
              Rogaine
            </a>
            (and other brands have) — but it is much more cheaper! As of writing
            this: 3 months supply of{" "}
            <a
              href="https://www.amazon.com/dp/B0000Y8H3S/ref=cm_sw_r_as_gl_api_gl_i_E9GARC3C204RMBVZY9BS?linkCode=ml1&tag=hgc03-20"
              target="_blank"
            >
              Rogaine
            </a>{" "}
            solution costs $42.72 whereas <strong>6</strong> months of
            Kirkland's costs <strong>only</strong> $20; so that is why for the
            minoxidil part of my recommendations, I recommend using — 
            <a
              href="https://www.amazon.com/dp/B008BMOEGA/ref=cm_sw_r_as_gl_api_gl_i_HNEEBCB2Z2P4J5ZNB6D9?linkCode=ml2&tag=hgc03-20"
              target="_blank"
            >
              Kirkland Minoxidil 5% Extra Strength
            </a>
            <div className="adPlace">
              <iframe
                sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                style={{ width: 120, height: 240 }}
                marginWidth={0}
                marginHeight={0}
                scrolling="no"
                frameBorder={0}
                src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=hgc03-20&language=en_US&marketplace=amazon&region=US&placement=B008BMOEGA&asins=B008BMOEGA&linkId=a197820222ca1aecf5b13906c409a111&show_border=true&link_opens_in_new_window=true"
              ></iframe>
            </div>
          </p>
          <p>
            I heard about Finasteride as a hair loss treatment relatively
            recently; about ~2 years ago. It was first used to treat benign
            prostatic hyperplasia in men; however, it is now being produced as
            a medication to treat hair loss as well.
          </p>
          <p>
            As they were offering it as a prescription pill -- I was "at once"
            against it; because among other reasons: taking a pill
            can potentially increase <strong>side effects</strong>, especially
            compared to topical or foam <strong>alternatives.</strong>
          </p>
          <p>
            But about 6 months ago, I noticed that a lot of brands have started
            offering topical Finasteride as an alternative to pills. I started
            doing quick research and learned that the main{" "}
            <strong>side effect is sexual;</strong> which is caused by
            decreasing DHT(the main sexual hormone of males) levels by
            Finasteride. But after reading reviews, I got "convinced" that
            topical in comparison to pills has lower side effects rates. So I've
            decided to give it a try. I have signed up for a subscription plan
            and got approved for the prescription of topical finasteride with
            0.3% concentration. However, after just using it for about a month,
            I noticed sexual side effects; in particular, I was having acute
            pain during orgasm. I <strong>immediately canceled</strong> my
            subscription and stopped using Finasteride! Fortunately for me, the
            sides ended within a week after stopping applying topical
            FInasteride!{" "}
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
              href="https://www.amazon.com/dp/B07CRNLRPQ/ref=cm_sw_r_as_gl_api_gl_i_3DMTVXARYBPJT0WHX0HN?linkCode=ml1&tag=hgc03-20"
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
              href="https://www.amazon.com/dp/B07CRNLRPQ/ref=cm_sw_r_as_gl_api_gl_i_3DMTVXARYBPJT0WHX0HN?linkCode=ml1&tag=hgc03-20"
              target="_blank"
            >
              Shapiro MD Leave-In Daily Foam
            </a>
             as an alternative to -- <strong>Finasteride</strong> -- that have
            side effects, most notably -- sexual!
            <div className="adPlace">
              <iframe
                sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                style={{ width: "120px", height: "240px" }}
                marginWidth="0"
                marginHeight="0"
                scrolling="no"
                frameBorder="0"
                src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=hgc03-20&language=en_US&marketplace=amazon&region=US&placement=B07CRNLRPQ&asins=B07CRNLRPQ&linkId=fdeb0f58d99249a1a54b702e89665c06&show_border=true&link_opens_in_new_window=true"
              ></iframe>
            </div>
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
              href="https://www.amazon.com/dp/B0994WXS42/ref=cm_sw_r_as_gl_api_gl_i_QR35GX821RJNJMQVFB7A?linkCode=ml1&tag=hgc03-20"
              target="_blank"
            >
              Keeps Shampoo
            </a>{" "}
            and{" "}
            <a
              href="https://www.amazon.com/dp/B0994YMK1Z/ref=cm_sw_r_as_gl_api_gl_i_K2R99C4RN2K8F9Y7WTD1?linkCode=ml1&tag=hgc03-20"
              target="_blank"
            >
              Conditioner
            </a>{" "}
            because they both contain 4 key <strong>natural</strong>{" "}
            ingredients: saw palmetto(natural DHT-blocker), biotin(promotes
            keratin production), green tea(improves hair quality), and
            caffeine(stimulates hair follicles). The first thing that you will
            notice when using 
            <a
              href="https://www.amazon.com/dp/B0994YMK1Z/ref=cm_sw_r_as_gl_api_gl_i_K2R99C4RN2K8F9Y7WTD1?linkCode=ml1&tag=hgc03-20"
              target="_blank"
            >
              Keeps Conditioner
            </a>{" "}
            is a very distinct/cool green tea smell -- which I do really like!
          </p>
          <p>
            As you can see adding Keeps Shampoo and Conditioner to your{" "}
            <strong>regimen</strong> adds up natural DHT blocking; which again,
            I think is an excellent <strong>alternative</strong> to Finasteride!
          </p>
          <div className="adPlace_keeps">
            <iframe
              sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
              style={{ width: "120px", height: "240px" }}
              marginWidth="0"
              marginHeight="0"
              scrolling="no"
              frameBorder="0"
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=hgc03-20&language=en_US&marketplace=amazon&region=US&placement=B0994WXS42&asins=B0994WXS42&linkId=74035aee259aa524141fbdba79eb497c&show_border=true&link_opens_in_new_window=true"
            ></iframe>
            <iframe
              sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
              style={{ width: "120px", height: "240px" }}
              marginWidth="0"
              marginHeight="0"
              scrolling="no"
              frameBorder="0"
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=hgc03-20&language=en_US&marketplace=amazon&region=US&placement=B0994YMK1Z&asins=B0994YMK1Z&linkId=ce76e691d52a98146ed4e76320e26c2e&show_border=true&link_opens_in_new_window=true"
            ></iframe>
             
          </div>
          <p>
            The next Shampoo that I recommend using 2-3 times per week is{" "}
            <a
              href="https://www.amazon.com/dp/B00AINMFAC/ref=cm_sw_r_as_gl_api_gl_i_GEB7Z0ATNRM5BSRTY28Z?linkCode=ml1&tag=hgc03-20"
              target="_blank"
            >
              Nizoral
            </a>{" "}
            which contains <strong>Ketoconazole</strong> -- in addition to being
            the best cure for fighting dandruff, has been proven to be also very
            good at hair loss. In particular, as the study concludes, it showed
            great results in clinical trials with patients{" "}
            <strong>combining</strong> Ketoconazole shampoo with their
            minoxidil regimen; you can see that study here:{" "}
            <a
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3262531/"
              target="_blank"
            >
               https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3262531/
            </a>
            <br></br>
            That is why I definitely recommend using Nizoral shampoo 2-3 times
            per week together with Keeps! I would suggest always using Keeps
            Conditioner after each shampoo(including after Nizoral).
          </p>
           {" "}
          <div className="adPlace">
            <iframe
              sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
              style={{ width: "120px", height: "240px" }}
              marginWidth="0"
              marginHeight="0"
              scrolling="no"
              frameBorder="0"
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=hgc03-20&language=en_US&marketplace=amazon&region=US&placement=B00AINMFAC&asins=B00AINMFAC&linkId=7d619e30801658c42f949ed1fdd42ea6&show_border=true&link_opens_in_new_window=true"
            ></iframe>
          </div>
          <p>
            And lastly, I also use and recommend one more Shampoo; I keep it in
            my backpack when I am out in the pool/sauna; usually, once per week.
            The{" "}
            <a
              href="https://www.amazon.com/dp/B00O4XZYLO/ref=cm_sw_r_as_gl_api_gl_i_CZEWTBWXVXB96F24CPRA?linkCode=ml1&tag=hgc03-20"
              target="_blank"
            >
              Alpecin Shampoo{" "}
            </a>
            -- promotes natural hair growth! It is probably the best Shampoo
            with <strong>caffeine</strong>, and after using it you will
            certainly appreciate its <strong>quality!</strong>
          </p>
          <div className="adPlace">
            <iframe
              sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
              style={{ width: "120px", height: "240px" }}
              marginWidth="0"
              marginHeight="0"
              scrolling="no"
              frameBorder="0"
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=hgc03-20&language=en_US&marketplace=amazon&region=US&placement=B00O4XZYLO&asins=B00O4XZYLO&linkId=7a9dd48ba9bdad8ea6eed024d447a907&show_border=true&link_opens_in_new_window=true"
            ></iframe>
          </div>
          <p>
            The last product that I am recommending in this 
            <span style={{ color: "blue" }}>Solutions</span> section is the --{" "}
            <a
              href="https://www.amazon.com/dp/B09WDXPZY1/ref=cm_sw_r_as_gl_api_gl_i_B68Y1HDD52XFMRABDSJB?linkCode=ml1&tag=hgc03-20"
              target="_blank"
            >
              Keeps Matte Thickening Hair Pomade for Men
            </a>{" "}
            The important thing about this hair styling pomade is that in
            addition to giving a style to hair when applied -- it has the same
            key ingredients(that shampoo and conditioner have): saw
            palmetto(natural DHT-blocker), biotin(promotes keratin production),
            green tea(improves hair quality), and caffeine(stimulates hair
            follicles). That means each time you style your hair, in{" "}
            <strong>addition</strong> to styling, you also{" "}
            <strong>contribute</strong> to the hair growth/regrowth regimen with
            those natural and healthy ingredients you add one more --{" "}
            <strong>a healthy alternative</strong> to Finasteride!
          </p>
          <div className="adPlace">
            <iframe
              sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
              style={{ width: 120, height: 240 }}
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=hgc03-20&language=en_US&marketplace=amazon&region=US&placement=B09WDXPZY1&asins=B09WDXPZY1&linkId=8042d4850568304f1fa255cb242510eb&show_border=true&link_opens_in_new_window=true"
            ></iframe>
          </div>
        </body>
      </div>
    </section>
  );
};

// export default Home;
