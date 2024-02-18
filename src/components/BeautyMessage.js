import ScrollAnimation from "react-animate-on-scroll";

const BeautyMessage = () => {
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
    <div className="beauty">
      <video
        style={isSafari ? safariStyles : safariStyles2}
        className="mobile-vid"
        autoPlay
        loop
        muted
      >
        <source src="/motion/bottle.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <img
        style={isSafari ? safariStyles2 : safariStyles}
        className="mobile-gif"
        id="gif"
        src="/motion/bottle.gif"
        alt="Animation"
      />

      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
        animatePreScroll={false}
      >
        <p>Beauty is my message to the world. What's yours?</p>
      </ScrollAnimation>
    </div>
  );
};

export default BeautyMessage;
