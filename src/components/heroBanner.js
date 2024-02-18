import react from "react";
import ScrollAnimation from "react-animate-on-scroll";
// import ButtonHoverEffects5 from './ButtonHoverEffects5'

const handleScroll = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
var isSafari;
if (typeof window !== "undefined") {
  isSafari = /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent);
}
// const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const safariStyles = {
  display: "none",
  /* Add other Safari-specific styles here */
};
const safariStyles2 = {
  /* Add other Safari-specific styles here */
};

const safariStyles3 = {
  display: "block",
};

console.log(isSafari);

const HeroBanner = () => {
  return (
    <div className="hero">
      <video
        // style={{ display: "block" }}
        style={isSafari ? safariStyles : safariStyles3}
        className="mobile-vid"
        autoPlay
        muted
      >
        <source src="/motion/pencil-violin.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="image-container">
        <img
          className="mobile-gif"
          id="gif"
          src="/motion/pencil-mobile.png"
          alt="Animation"
        />
      </div>
      <img
        className="safari-gif"
        // style={{ display: "none" }}
        style={isSafari ? {} : safariStyles}
        src="/motion/pencil-violin.gif"
        alt=""
      />

      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
        animatePreScroll={false}
      >
        <div className="hero-text">
          <h1>Obaida Studios</h1>
          <p>Where lines compose and colours sing…</p>
          <ul className="bio timeline">
            <li>
              Save money and time with a subscription for all your graphic
              design needs
            </li>
            <li>
              Get many graphic design requests- no job is too small or too big
            </li>
            <li>
              Get access to the best graphic design services without hiring a
              team
            </li>
            <li>Keep your brand looking consistent and up to date</li>
            <li>
              Get all the graphics you need when you need them – no waiting or
              searching around for a designer.
            </li>
            <li>
              Turn one idea into many amazing visuals without breaking the bank
            </li>
          </ul>

          {/* <ButtonHoverEffects5 text="Talk to me" link="mailto:hi@obaidazeino.com"/> */}
          <div
            className="scroll-arrow"
            onClick={() => handleScroll("section1")}
          >
            <span>&#8595;</span>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default HeroBanner;
