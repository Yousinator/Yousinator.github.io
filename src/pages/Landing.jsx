import React, { useState, useEffect, useRef } from "react";
import "../index.css";
import Typed from "react-typed";

function Landing() {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoLoad = () => setLoading(false);
    const videoEl = videoRef.current;
    videoEl.addEventListener("loadeddata", handleVideoLoad);

    return () => videoEl.removeEventListener("loadeddata", handleVideoLoad);
  }, []);

  useEffect(() => {
    if (loading) {
      // Disable scrolling and hide scrollbar
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  return (
    <>
      {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}

      <video
        className="video-bg"
        autoPlay
        muted
        loop
        ref={videoRef}
        preload="auto"
      >
        <source src="/home-vod1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="home-content">
        <h3>Hey There! I'm</h3>
        <h1>Yousef Musabeh</h1>
        <h3>
          I'm a{" "}
          <span className="multiple-text">
            <Typed
              strings={[
                "Co-Founder & CEO",
                "Vice President",
                "Machine Learning Engineer",
                "AI and Data Science Student",
              ]}
              typeSpeed={100}
              backSpeed={100}
              backDelay={100}
              loop={true}
            />
          </span>
        </h3>
        <p>
          An enthusiastic and motivated professional based in Amman, Jordan. At
          the age of 19, I'm currently a Co-Founder & CEO @AuspicesAI, VP @HTU
          Cyber Security Club. Passion drives my journey in revolutionizing
          cybersecurity through the power of AI.
        </p>

        <div className="social-media">
          <a
            href="https://github.com/Yousinator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
            <span>Yousinator</span>
          </a>
          <a
            href="https://www.linkedin.com/in/yousef-musabeh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
            <span>Yousef Musabeh</span>
          </a>
          <a
            href="https://twitter.com/OverpoweredOG_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-twitter"></i>
            <span>OverpoweredOG_</span>
          </a>
          <a
            href="https://medium.com/@y.omusabeh/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-medium"></i>
            <span>Yousef Musabeh</span>
          </a>
        </div>
        <a
          href="/Latest_Resume.pdf"
          download="Yousef-Musabeh-Resume"
          className="btn"
        >
          Download CV
        </a>

        <a href="#about">
          <div className="mouse"></div>
        </a>
        <div className="scroller">Scroll Down for More</div>
      </div>
    </>
  );
}

export default Landing;
