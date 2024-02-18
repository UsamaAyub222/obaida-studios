import { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import CursorProvider from "../Providers/cursorProvider";
import { useRouter } from "next/router";
import ReactGA from "react-ga";
import Home from "./Home";
import Loading from "./Loading";
import PhoneConsultationButton from "../components/PhoneConsultationButton";
import ScrollToTop from "../components/scrollToTop";
import Navigation from "../components/Navigation";
import HeroBanner from "../components/heroBanner";
import PageProgressBar from "../components/PageProgressBar";
import Services from "../components/Services";
import Template from "../components/Template";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Contact from "../components/contact";
import Subscribe from "../components/Subsribe";
import ButtonHoverEffect5 from "../components/ButtonHoverEffects5";
import BeautyMessage from "../components/BeautyMessage";
import Quote from "../components/quote";
import FAQSection from "../components/Faq";
import Testimonials from "../components/testimonials";
import Newsletter from "../components/Newsletter";

function usePageViews() {
  let location = useRouter();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
}
function App(props) {
  usePageViews();
  const location = useRouter();
  const [profile, setProfile] = useState(true);
  const [showAnimation, setShowAnimation] = useState(true);
  const [showClassName, setShowClassName] = useState(false);
  const [loading, setLoading] = useState(true);
  const data = props.passData;
  useEffect(() => {
    // Simulate loading time or fetch data from an API
    // Once the loading is complete, set setLoading(false)
    setTimeout(() => {
      setLoading(false);
      setShowClassName(true);
    }, 1500);
  }, []);

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
  console.log("isSafari", isSafari)
  const safariStyles = {
    display: "none",
    /* Add other Safari-specific styles here */
  };
  const safariStyles2 = {
    display: "block",
    /* Add other Safari-specific styles here */
  };

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
  let text = data.find((item) => item.id == "5").content;

  return (
    <>
      <Head>
        <title>Obaida Studios</title>
      </Head>
      <CursorProvider>
        {loading ? (
          <Loading class={showClassName ? "loaded" : ""} />
        ) : (
          <>
            <div className="App">
              <PhoneConsultationButton />

              <ScrollToTop />
              <header>
                <Link href="/">
                  {showAnimation ? (
                    <>
                      <video
                        // style={{ display: "block" }}
                        // style={safariStyles2}
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
                </Link>
                <Navigation />
              </header>

              <main>
                <img src="/images/faded.png" alt="logo" className="faded" />

                {location.pathname === "/" && (
                  <>
                    <HeroBanner />
                    <PageProgressBar
                      height={5}
                      color="#30bf97"
                      showPercentage={false}
                    />
                    <Services />
                    <h2 id="section1" className="subhead">
                      Portfolio
                    </h2>
                    <small className="portfolio-click">
                      *Click Category to View Work
                    </small>
                  </>
                )}
                <Template passData={passData} profile={profile}>
                  <TransitionGroup>
                    <CSSTransition
                      timeout={300}
                      classNames="transition"
                      key={location.key}
                    >
                      {/* <Switch>
                    <Route exact path="/"> */}
                      <Link href="/">
                        <Home passData={passData} />
                      </Link>
                      {/* <Link href="/:workPage"></Link> */}
                      {/* </Route>
                    <Route exact path="/:workPage">
                      <Work passData={passData} />
                    </Route>
                    <Route path="/:workPage/:detailsPage">
                      <WorkDetails passData={passData} />
                    </Route>
                  </Switch> */}
                    </CSSTransition>
                  </TransitionGroup>
                </Template>

                {location.pathname === "/" && (
                  <>
                    <Subscribe
                      idname="section2"
                      child1={
                        <>
                          <h3>
                            Basic <br />
                            Subscription
                          </h3>
                          <em>749</em>
                          <small>$/MO</small>
                          <ul>
                            <li>10 graphic design requests</li>
                            <li>2 Revisions per request</li>
                            <li>Source Files</li>
                            {/* <li>72hr delivery per request/revision</li> */}
                            <li>Cancel any time</li>
                          </ul>
                          <ButtonHoverEffect5
                            target="_blank"
                            text="Talk to me"
                            link="mailto:hi@obaidazeino.com"
                          />
                        </>
                      }
                      child2={
                        <>
                          <h3>
                            Premium <br />
                            Subscription
                          </h3>
                          <em>999</em>
                          <small>$/MO</small>
                          <ul>
                            <li>15 graphic design requests</li>
                            <li>3 Revisions per request</li>
                            <li>Source Files</li>
                            {/* <li>48hr delivery per request/revision</li> */}
                            <li>+ Motion graphics (delays apply)</li>
                            <li>+ Illustration (delays apply)</li>
                            <li>Cancel any time</li>
                          </ul>
                          <ButtonHoverEffect5
                            target="_blank"
                            text="Talk to me"
                            link="mailto:hi@obaidazeino.com"
                          />
                        </>
                      }
                      child3={
                        <>
                          <h3>
                            Individual <br />
                            Requests
                          </h3>
                          <em>–</em>
                          <small>get a quote</small>
                          <ul>
                            <li>Unlimited Revisions</li>
                            <li>Source Files</li>
                            <li>72hr delivery per request/revision</li>
                            <li>Web development offered (delays apply)</li>
                          </ul>
                          <ButtonHoverEffect5
                            target="_blank"
                            text="Talk to me"
                            link="mailto:hi@obaidazeino.com"
                          />
                        </>
                      }
                      title={"Pricing"}
                    />
                    <BeautyMessage />
                    <Subscribe
                      child1={
                        <>
                          <h3>How Graphic Design Can Improve Your Business</h3>
                          <p>
                            Graphic design is one of the most important aspects
                            of any marketing campaign, regardless of the
                            industry or niche. In today's highly competitive
                            business landscape, good graphic design can mean the
                            difference between success and failure…{" "}
                          </p>
                          <ButtonHoverEffect5 text="Read more" link="/4/1" />
                        </>
                      }
                      child2={
                        <>
                          <h3>
                            Branding Where to Start: A Guide for Business Owners
                          </h3>
                          <p>
                            For most business owners, branding is a vital aspect
                            of their businesses. Branding not only helps to
                            create awareness for your business, but it also
                            helps to develop a strong sense of brand identity
                            that can distinguish you from your competitors…
                          </p>
                          <ButtonHoverEffect5 text="Read more" link="/4/2" />
                        </>
                      }
                      child3={
                        <>
                          <h3>
                            The Power of Branding: Why Every Business Owner
                            Should Prioritize It
                          </h3>
                          <p>
                            Are you struggling to differentiate your business
                            from its competitors? Branding might just be the
                            missing piece in your puzzle. As a business owner,
                            you're always thinking about how you can optimize
                            your operations and increase revenue…
                          </p>
                          <ButtonHoverEffect5 text="Read more" link="/4/3" />
                        </>
                      }
                      title={"Blogs"}
                      classs={"blogsect"}
                    />
                    <Quote />
                    <FAQSection />
                    <Testimonials text={text} />
                    <Newsletter />
                  </>
                )}
              </main>
            </div>
            <Contact></Contact>
            {/* <Home /> */}
          </>
        )}
      </CursorProvider>
    </>
  );
}

// const inter = Inter({ subsets: ["latin"] });

export default App;
