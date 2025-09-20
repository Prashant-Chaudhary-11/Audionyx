import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const About = () => {
  return (
    <section className="about-hero py-5">
      <div className="container text-center">
        {/* Heading */}
        <h1
          className="fw-bold display-4 mb-3"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Discover Music. Forever.
        </h1>

        {/* Subheading */}
        <p
          className="lead mb-5 text-muted"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Our platform brings artists, fans, and playlists together in one
          powerful space <br />— stream endlessly, share freely, and enjoy music
          anywhere.
        </p>

        {/* Main Content */}
        <div className="position-relative d-flex justify-content-center align-items-center">
          {/* Left Badge */}
          <div
            className="position-absolute start-0 translate-middle-y text-start p-3 rounded-3 shadow-sm"
            style={{ top: "40%", background: "#e8d9ff", maxWidth: "200px" }}
            data-aos="fade-right"
          >
            <strong>Unlimited Streaming</strong>
            <p className="mb-0 small text-muted">
              Enjoy millions of songs with no interruptions.
            </p>
          </div>

          {/* Central Image */}
          <img
            src="/Shot.png"
            alt="Music App Mockup"
            className="img-fluid rounded-4"
            style={{ maxWidth: "450px" }}
            data-aos="zoom-in"
          />

          {/* Right Badge */}
          <div
            className="position-absolute end-0 translate-middle-y text-start p-3 rounded-3 shadow-sm"
            style={{ top: "40%", background: "#d9ffd9", maxWidth: "220px" }}
            data-aos="fade-left"
          >
            <strong>Premium Plan</strong>
            <p className="mb-0 small text-muted">
              Upgrade for ad-free listening, downloads, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
