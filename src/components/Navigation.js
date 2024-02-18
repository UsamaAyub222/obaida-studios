import React, { useState } from "react";
// import {NavLink} from "react-router-dom"
// import { HashLink} from 'react-router-hash-link'
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  function handleOpen() {
    setNav(true);
  }

  function handleClose() {
    setNav(false);
  }

  const handleDelayedScroll = (target) => {
    setTimeout(() => {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50); // Adjust the delay time as needed
  };

  const isActive = (path) => {
    if (router.pathname === path || router.asPath === path) {
      return "active";
    }
    return "";
  };
  return (
    <div>
      {/* <svg onClick={handleOpen} className="nav-icon hamburger" xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24"><g id="Layer_2" data-name="Layer 2"><g id="hamburger"><rect width="32" height="4" fill="#30bf97"/><rect y="10" width="32" height="4" fill="#30bf97"/><rect y="20" width="32" height="4" fill="#30bf97"/></g></g></svg>
            <svg onClick={handleOpen} className="nav-icon hamburger" xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24"><g id="Layer_2" data-name="Layer 2"><g id="hamburger"><rect width="32" height="4" fill="#30bf97"/><rect y="10" width="32" height="4" fill="#30bf97"/><rect y="20" width="32" height="4" fill="#30bf97"/></g></g></svg> */}
      <svg
        onClick={handleOpen}
        className="nav-icon hamburger"
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 24"
      >
        <defs></defs>
        <g id="hamburger">
          <g>
            <rect className="cls-1" width="32" height="4" />
            <rect className="cls-1" x="9" y="10" width="23" height="4" />
            <rect className="cls-1" y="20" width="32" height="4" />
          </g>
        </g>
      </svg>

      <nav>
        {/* <svg onClick={handleClose} style={!nav ? {display: "none"} : {display: "block"}} className="nav-icon exit" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"><g id="Layer_2" data-name="Layer 2"><g id="x"><line x1="32.1" y1="1.9" x2="1.9" y2="32.1" fill="none" stroke="#30bf97" stroke-miterlimit="10" stroke-width="5.33"/><line x1="1.9" y1="1.9" x2="32.1" y2="32.1" fill="none" stroke="#30bf97" stroke-miterlimit="10" stroke-width="5.33"/></g></g></svg> */}
        <svg
          onClick={handleClose}
          style={!nav ? { display: "none" } : { display: "block" }}
          className="nav-icon exit"
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="x">
              <polygon
                points="34 3.8 30.2 0 17 13.2 3.8 0 0 3.8 13.2 17 0 30.2 3.8 34 17 20.8 30.2 34 34 30.2 20.8 17 34 3.8"
                fill="#30bf97"
              />
            </g>
          </g>
        </svg>

        <ul
          className="main-nav"
          style={
            nav
              ? { opacity: "1", transform: "translateX(0%)" }
              : { opacity: "0", transform: "translateX(100%)" }
          }
        >
          <li onClick={handleClose}>
            <Link href="/" className={isActive("/")}>
              Home
            </Link>
          </li>
          <li
            onClick={handleClose}
            className="dropdown-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span>Portfolio</span>
            <ul className="dropdown-menu">
              <li className="dropdown-option" onClick={handleClose}>
                <Link
                  className={isActive("/works/logoBranding")}
                  href="/works/logoBranding"
                >
                  Logo &<br />
                  Branding
                </Link>
              </li>
              <li className="dropdown-option" onClick={handleClose}>
                <Link
                  className={isActive("/works/Advertising")}
                  href="/works/Advertising"
                >
                  Advertising <br />
                  Creatives
                </Link>
              </li>
              <li className="dropdown-option" onClick={handleClose}>
                <Link
                  className={isActive("/works/PackagingCovers")}
                  href="/works/PackagingCovers"
                >
                  Covers & <br /> Packaging
                </Link>
              </li>
            </ul>
          </li>
          <li onClick={handleClose}>
            <Link className={isActive("/works/blogs")} href="/works/blogs">
              Blog
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              className={isActive("/works/about/info")}
              href="/works/about/info"
            >
              About
            </Link>
          </li>
          {/* <li onClick={handleClose}><Link activeClassName="active" smooth href="/#section2">Pricing</Link></li> */}
          <li>
            <div className="social">
              <a target="_blank" href="mailto:hi@obaidazeino.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="social-icon github"
                    d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"
                  />
                </svg>
              </a>
              <a href="tel:+5144766190">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="social-icon phone"
                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z"
                  />
                </svg>
              </a>
              <a target="_blank" href="https://www.behance.net/obaidazenoab9f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="social-icon behance"
                    d="M8.84 10.835h-1.965v-1.859h1.783c1.878 0 1.646 1.859.182 1.859zm5.789 1.058h2.624c-.115-1.687-2.36-1.81-2.624 0zm-5.9.396h-1.854v1.947h1.824c1.782-.001 1.673-1.947.03-1.947zm15.271-.289c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-13.357-.733c1.668-.853 1.607-3.981-1.587-4.028h-4.056v8.73h3.771c3.958 0 3.891-3.967 1.872-4.702zm3.357-3.166h4v-.875h-4v.875zm4.943 3.693c-.545-3.505-6.053-3.711-6.053.872 0 4.526 5.18 3.818 5.949 1.56h-1.848c-.645.748-2.508.531-2.404-1.184h4.41c.009-.555-.009-.953-.054-1.248z"
                  />
                </svg>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
