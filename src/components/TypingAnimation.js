import React, { useState, useEffect } from "react";
import arrow from "../images/arrow.svg"
import useParallax from '../hooks/useParallax'

const phrases = [
    "At Obaida Zeino Designs, I am more than a designer - I am a storyteller.",
  "I see beyond the canvas, beyond the pixels and lines.",
  "I weave together colors, shapes, and textures to tell the story of your brand.",
  "I take an outside-the-box approach, pushing the limits of creativity and innovation to create designs that are as unique as you are.",
  "Let us embark on this journey together, to create designs that transcend the ordinary and embrace the extraordinary.",
  "Contact me today, and let us bring your brand to life."
];


const TypingAnimation = () => {
  const style = { 
    transform: `translateX(${useParallax()/3}px)`,
    // backgroundColor: `${(useParallax()>200) ? 'rgba(1, 38, 35, .3)' : '#000'}`
  }
  
  const style2 = { 
    transform: `translateX(${-useParallax()/3}px)`,
    // backgroundColor: `${(useParallax()>200) ? 'rgba(1, 38, 35, .3)' : '#000'}`
  }
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentPhrase = phrases[index];
      const currentLength = text.length;

      if (!isDeleting) {
        setText(currentPhrase.substring(0, currentLength + 1));
      } else {
        setText(currentPhrase.substring(0, currentLength - 1));
      }

      if (!isDeleting && currentLength === currentPhrase.length) {
        setIsDeleting(true);
      } else if (isDeleting && currentLength === 0) {
        setIsDeleting(false);
        setIndex((index + 1) % phrases.length);
      }
    }, isDeleting ? 10 : 75);

    return () => clearTimeout(timeout);
  }, [text, index, isDeleting]);

  return (
    <div className="typing-animation">
      <div className="intro-rect3"></div>
      <div style={style} className="rect intro-rect1 "></div>
      <div className="animated-text">
            {text}
            <span className="cursor-blink">|</span>
      </div>
      <div style={style2} className="rect intro-rect2 rect2intro-move"></div>
      {/* <div className="arrow"><img src={arrow}></img></div> */}
    </div>
  );
};

export default TypingAnimation;