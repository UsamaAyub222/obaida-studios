import ScrollAnimation from "react-animate-on-scroll";

const Quote = () => {
  var isSafari;
  if (typeof window !== "undefined") {
    isSafari = /^((?!chrome|android).)*safari/i.test(
      window.navigator.userAgent
    );
  }
  const safariStyles = {
    display: "none",
    /* Add other Safari-specific styles here */
  };
  const safariStyles2 = {
    display: "block",
    /* Add other Safari-specific styles here */
  };
  return (
    <div className="quote">
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
        animatePreScroll={false}
      >
        <p>
          A designer knows he has achieved perfection not when there is nothing
          left to add, but when there is nothing left to take away.
        </p>
        <small>Antoine De Saint Exupery</small>
      </ScrollAnimation>
      <video
        style={isSafari ? safariStyles : safariStyles2}
        className="mobile-vid"
        autoPlay
        loop
        muted
      >
        <source src="/motion/nothing.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <img
        style={isSafari ? safariStyles2 : safariStyles}
        className="mobile-gif"
        id="gif"
        src="/motion/nothing.gif"
        alt="Animation"
      />
    </div>
  );
};

export default Quote;
