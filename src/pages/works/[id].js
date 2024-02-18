import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import data from "@/data";
import ScrollAnimation from "react-animate-on-scroll";
import withAppContext from "@/HOCs/withCursor";
import Contact from "@/components/contact";
import CursorProvider from "@/Providers/cursorProvider";
import PhoneConsultationButton from "@/components/PhoneConsultationButton";
import ScrollToTop from "@/components/scrollToTop";
import Navigation from "@/components/Navigation";
import Loading from "../Loading";
import Template from "@/components/Template";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useRouter } from "next/router";

const Work = (props) => {
  const [profile, setProfile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showClassName, setShowClassName] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);
  //   const isProfile = () => {
  //     // props.passData(false);
  //   };
  const router = useRouter();
  const { id } = router.query;

  const filterCategory = data.filter((obj) => {
    return id === obj.slug;
  });

  useEffect(() => {
    // Simulate loading time or fetch data from an API
    // Once the loading is complete, set setLoading(false)
    setTimeout(() => {
      setLoading(false);
      setShowClassName(true);
    }, 1500);
  }, []);
  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setShowAnimation(true);
      window.scrollTo({
        top: 20,
        left: 0,
        behavior: "smooth",
      });
    }, 2000);
    return () => clearTimeout(animationTimeout);
  }, []);
  //   isProfile();
  //   console.log(isProfile());
  const passData = (data) => {
    setProfile(data);
  };
  const { onCursor } = props.context;

  // let [position, ref, styles2] = usePosition()

  const [hoveredItem, setHoveredItem] = useState(null);
  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);

    onCursor("pointer");
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    onCursor();
  };

  //   let { workPage } = useParams();
  const videoRef = useRef(null);
  const handleLogoClick = () => {
    if (videoRef.current) {
      // Pause the video to reset it
      videoRef.current.pause();

      // Reset the video playback to the beginning
      videoRef.current.currentTime = 0;

      // Play the video to replay the animation
      videoRef.current.play();
    }
  };
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
  const innerContent = filterCategory[0];
  let content = innerContent?.content.map((item, index) => {
    return (
      <ScrollAnimation
      animateIn="fadeIn"
      animateOut="fadeOut"
      animatePreScroll={false}
        key={index}
      >
        {item.link ? (
          <div
            className="card"
            onMouseEnter={() => {
              item.link ? onCursor("default") : onCursor("pointer");
            }}
            onMouseLeave={onCursor()}
          >
            {item.image && (
              <div className="img-cont">
                <Image src={item.image.src} />
              </div>
            )}
            <div className="card-text">
              <h3>{item.title}</h3>
              {!item.image && <p>{item.body}</p>}
              <time>{item.date}</time>
              {item.link && (
                <div className="web-z">
                  <a className="dev-visit" href={item.link}>
                    Visit
                  </a>
                  <a href={item.source}>Source</a>
                </div>
              )}
            </div>
          </div>
        ) : (
          <Link href={`/works/${id}/${item.slug}`}>
            <div
              className="card"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              {item.image && (
                <div className="img-cont">
                  <img src={item.image.src} />
                </div>
              )}
              <div
                className={`card-text  ${
                  (hoveredItem === item.id && item.image) || item.extended
                    ? "text-active"
                    : "text-hidden"
                }`}
              >
                <h3>{item.title}</h3>
                {!item.image && <p>{item.body}</p>}
                <time>{item.date}</time>
              </div>
            </div>
          </Link>
        )}
      </ScrollAnimation>
    );
  });

  return (
    <>
      <Head>
        <title>Obaida Studios || {innerContent.title}</title>
        <meta name="description" content={innerContent.desc} />
      </Head>
      {/* <CursorProvider> */}
      {loading ? (
        <Loading class={showClassName ? "loaded" : ""} />
      ) : (
        <div className="App">
          <PhoneConsultationButton />

          <ScrollToTop />
          <header>
            <Link href="/">
              {showAnimation ? (
                <>
                  <video
                    style={isSafari ? safariStyles : safariStyles2}
                    className="mobile-vid"
                    ref={videoRef}
                    onClick={handleLogoClick}
                    autoPlay
                    muted
                  >
                    <source src="/motion/logo.webm" type="video/webm" />
                  </video>
                  <img
                    src="/images/logo.png"
                    style={isSafari ? safariStyles2 : safariStyles}
                    className="mobile-gif"
                    alt="logo"
                  />
                </>
              ) : (
                <img
                  src="/images/logo.png"
                  alt="logo"
                  onClick={handleLogoClick}
                />
              )}
              {/* <Home /> */}
            </Link>
            <Navigation />
          </header>
          <main>
          <img src="/images/faded.png" alt="logo" className="faded" />
            <div>
              <Template passData={passData} profile={profile}>
                <TransitionGroup>
                  <CSSTransition
                    timeout={300}
                    classNames="transition"
                    key={location.key}
                  >
                    <div>
                      <div className="work-text">
                        <h1 className="page-title">
                          {filterCategory[0].title}
                        </h1>
                        <p>{filterCategory[0].desc}</p>
                      </div>
                      <div className="cards">{content}</div>
                    </div>
                  </CSSTransition>
                </TransitionGroup>
              </Template>

              <Contact></Contact>
            </div>
          </main>
        </div>
      )}
      {/* </CursorProvider> */}
    </>
  );
};
export default withAppContext(Work);
