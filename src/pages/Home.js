import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import PageProgressBar from "../components/PageProgressBar";
import HeroBanner from "../components/heroBanner";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import withAppContext from "../HOCs/withCursor";

function TypingAnimation(props) {
  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState(props.phrases[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((textIndex) => (textIndex + 1) % props.phrases.length);
      setText(props.phrases[textIndex]);
    }, props.interval);

    return () => clearInterval(interval);
  }, [props.phrases, props.interval]);

  return (
    <span className={props.className}>
      {text.split("").map((char, index) => (
        <span key={index} style={{ animationDelay: `${index * 50}ms` }}>
          {char}
        </span>
      ))}
    </span>
  );
}
const Home = (props) => {
  // console.log(props);
  const profile = () => props.passData(true);

  profile();
  const { onCursor } = props.context;
  const style = { textAlign: "right" };
  return (
    <>
      <div className="home">
        {/* <HeroBanner/> */}
        <div
          onMouseEnter={() => onCursor("pointer")}
          onMouseLeave={onCursor}
          className="heading writing"
        >
          <Link href="/works/logoBranding">
            <div className="rect category">
              <h3>Logo & Branding</h3>
              <span>1</span>
              <p>
                My logo and branding collection is a testament to my dedication
                towards creating visually stunning, impactful and memorable
                designs that help businesses establish a distinctive identity in
                the market. As a professional designer with years of experience,
                I recognize the vital role that a logo and branding collection
                plays in conveying the core values and ethos of a business.
              </p>
            </div>
          </Link>
        </div>
        <div
          onMouseEnter={() => onCursor("pointer")}
          onMouseLeave={onCursor}
          className="heading graphic"
        >
          <Link href="/works/Advertising">
            <div className="rect category">
              <h3>Advertising Creatives</h3>
              <span>2</span>
              <p>
                My advertising creatives collection is an extensive showcase of
                innovative and persuasive ad campaigns. The collection denotes
                my passion for advertising and creativity, and it showcases the
                depth and breadth of my experience in the field. It showcases my
                versatility as a creative professional.
              </p>
            </div>
          </Link>
        </div>
        <div className="rect rect-3"></div>
        <div
          onMouseEnter={() => onCursor("pointer")}
          onMouseLeave={onCursor}
          className="heading dev"
        >
          <Link href="/works/PackagingCovers">
            <div className="rect category">
              <h3>Covers & Packaging</h3>
              <span>3</span>
              <p>
                My covers and packaging collection is the perfect blend of style
                and functionality, with each piece designed to showcase the
                product and protect it at the same time. I have carefully
                curated a selection of covers and packaging options that are
                both eye-catching and practical, making them perfect for a range
                of different products and purposes.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default withAppContext(Home);
