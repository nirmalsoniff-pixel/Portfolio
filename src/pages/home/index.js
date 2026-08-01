import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <div className="intro_sec d-lg-flex align-items-center">

          {/* ================= Profile Image ================= */}

          <motion.div
            className="h_bg-image order-1 order-lg-2"
            style={{
              backgroundImage: `url(${introdata.your_img_url})`,
            }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          />

          {/* ================= Hero Text ================= */}

          <div className="text order-2 order-lg-1 d-lg-flex justify-content-center">

            <div className="align-self-center">

              <motion.div
                className="intro mx-auto"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
              >

                <span className="hero_badge">
                  👋 Welcome to my Portfolio
                </span>

                <h2 className="hero_title">
                  {introdata.title}
                </h2>

                <h1 className="hero_typewriter">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 20,
                    }}
                  />
                </h1>

                <p className="hero_description">
                  {introdata.description}
                </p>

                <div className="hero_buttons">

                  <Link to="/portfolio">
                    <button className="hero_btn primary">
                      🚀 View Projects
                    </button>
                  </Link>

                  <Link to="/contact">
                    <button className="hero_btn secondary">
                      📩 Contact Me
                    </button>
                  </Link>

                  <a
  href="/resume.pdf"
  download="Nirmal_Barmera_Resume.pdf"
  className="text_2"
>
  <div id="button_r" className="ac_btn btn">
    📄 Download Resume
    <div className="ring one"></div>
    <div className="ring two"></div>
    <div className="ring three"></div>
  </div>
</a>
                </div>

              </motion.div>

            </div>

          </div>

        </div>
      </section>
    </HelmetProvider>
  );
};