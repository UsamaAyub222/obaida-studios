import { useRouter } from "next/router";
import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import data from "../../../../data";
import ScrollAnimation from "react-animate-on-scroll";
import withAppContext from "@/HOCs/withCursor";
import Contact from "../../../../components/contact";
import CursorProvider from "@/Providers/cursorProvider";
import { marked } from "marked";
import PhoneConsultationButton from "../../../../components/PhoneConsultationButton";
import ScrollToTop from "../../../../components/scrollToTop";
import Navigation from "../../../../components/Navigation";
import Loading from "../../../Loading";
import Template from "../../../../components/Template";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const DynamicDetailsPage = (props) => {
  const { onCursor } = props.context;
  const router = useRouter();
  const { id, id2 } = router.query;
  let filterCategory = data.filter((obj) => {
    return id === obj.slug;
  });

  filterCategory = filterCategory[0];
  let object = {};
  let findIn = filterCategory?.content.filter((obj) => {
    if (id2 === obj.slug) {
      object = obj;
      return;
    }
  });

  const [hoveredItem, setHoveredItem] = useState(null);
  const [showFullSize, setShowFullSize] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [profile, setProfile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showClassName, setShowClassName] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);

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
  const passData = (data) => {
    setProfile(data);
  };

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

  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleThumbnailClick = (image) => {
    setShowFullSize(true);
    setSelectedImage(image);
  };

  const handleClose = () => {
    setShowFullSize(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Head>
        <title>Obaida Studios || {object.title}</title>
        <meta name="description" content={object.desc} />
      </Head>

      <div>
        <CursorProvider>
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
                        // style={{ display: "block" }}
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
                        // style={{ display: "none" }}
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
                          <div
                            className="article"
                            onMouseEnter={
                              object.image
                                ? onCursor("default")
                                : onCursor("pointer")
                            }
                            onMouseLeave={onCursor()}
                          >
                            <h1 className="page-title">{object.title}</h1>
                            {object.image && (
                              <div className="img-container">
                                <img
                                  onMouseEnter={() =>
                                    handleMouseEnter(object.image.src)
                                  }
                                  onMouseLeave={handleMouseLeave}
                                  onClick={() =>
                                    handleThumbnailClick(object.image.src)
                                  }
                                  src={object.image.src}
                                  alt="project"
                                />
                                {
                                  <div
                                    className={`caption ${
                                      hoveredItem === object.image.src
                                        ? "caption-active"
                                        : ""
                                    }`}
                                  >
                                    + View Full Screen
                                  </div>
                                }
                              </div>
                            )}
                            {!object.extended && !object.bio ? (
                              <div className="desc">
                                <h4>Industry</h4>
                                <p>{object.industry}</p>
                                <h4>Target Audience</h4>
                                <p>{object.targetAudience}</p>
                                <h4> Project Description</h4>
                                <p>{object.body}</p>
                                <small>
                                  (Some of this text has been written with the
                                  help of AI)
                                </small>
                              </div>
                            ) : (
                              ""
                            )}
                            {object.extended && (
                              <div
                                className="blog"
                                dangerouslySetInnerHTML={{
                                  __html: marked(object.extended),
                                }}
                              />
                            )}
                            {object.bio && (
                              <div className="shapes">
                                <div className="circle"></div>

                                <h2 className="subhead">About</h2>
                                <p>{object.bio}</p>
                                <h3>Philosophy</h3>
                                <h4>Competence</h4>
                                <p>
                                  At Obaida Studios, we are commited to a high
                                  level of competence and to providing our
                                  clients with unmatched skill, excellence and
                                  expertise in the respective requested areas.
                                </p>
                                <h4>Responsibility</h4>
                                <p>
                                  We assume full responsibility of any project
                                  at hand, while being highly prepared to
                                  respond to any issues that may arise.
                                </p>
                                <h4>Attention and Full Involvement</h4>
                                <p>
                                  At Obaida Studios, we give each project our
                                  full attention and our unbridled involvement.
                                  We make sure of that through highly efficient
                                  resource management and allocation. We believe
                                  this is key to producing outstanding results.
                                </p>
                                <h4>Integrity</h4>
                                <p>
                                  We adhere to the highest of standards when it
                                  comes to integrity. For us, this entails a
                                  commitment to giving each project our very
                                  best, sustaining long-term relationships with
                                  clients or concluding them at a positive note
                                  and maintaining honesty and transparency in
                                  communication with the client as it pertains
                                  to the project at hand.
                                </p>
                                <dl>
                                  <h3>contact</h3>
                                  <dt>email:</dt>
                                  <dd>
                                    <a href="mailto:hi@obaidazeino.com">
                                      hi@obaidazeino.com
                                    </a>
                                  </dd>
                                  <dt>tel:</dt>
                                  <dd>
                                    <a href="tel:+15144766190">+15144766190</a>
                                  </dd>
                                  <dt>Address</dt>
                                  <dd>
                                    2001 Carling Ave <br /> Ottawa, ON K2A 3W5
                                  </dd>
                                </dl>
                              </div>
                            )}
                            {object.imgExtended &&
                              object.imgExtended.map((item, index) => {
                                return (
                                  <ScrollAnimation
                                  animateIn="fadeIn"
                                  animateOut="fadeOut"
                                  animatePreScroll={false}
                                    key={index}
                                  >
                                    <div className="img-container2">
                                      <img
                                        key={item}
                                        onMouseEnter={() =>
                                          handleMouseEnter(item)
                                        }
                                        onMouseLeave={handleMouseLeave}
                                        src={item.src}
                                        alt="additional project"
                                        onClick={() =>
                                          handleThumbnailClick(item.src)
                                        }
                                      />
                                      {
                                        <div
                                          className={`caption2 ${
                                            hoveredItem === item
                                              ? "caption-active2"
                                              : ""
                                          }`}
                                        >
                                          + View Full Screen
                                        </div>
                                      }
                                    </div>
                                  </ScrollAnimation>
                                );
                              })}
                            {showFullSize && selectedImage && (
                              <div
                                className="full-size-overlay"
                                onClick={handleClose}
                              >
                                <img
                                  src={selectedImage}
                                  alt="Full Size"
                                  className="full-size-image"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </CSSTransition>
                    </TransitionGroup>
                  </Template>
                  <Contact></Contact>
                </div>
              </main>
            </div>
          )}
        </CursorProvider>
      </div>
    </>
  );
};

export default withAppContext(DynamicDetailsPage);
