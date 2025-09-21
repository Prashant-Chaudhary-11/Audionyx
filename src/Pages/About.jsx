import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const phoneRef = useRef(null);

  // Handle mouse movement for 3D tilt
  const handleMouseMove = (e) => {
    const phone = phoneRef.current;
    const rect = phone.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse X relative to phone
    const y = e.clientY - rect.top; // mouse Y relative to phone
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
    const rotateY = ((x - centerX) / centerX) * 10; // max 10deg

    phone.style.transform = `translate(-50%, -50%) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const phone = phoneRef.current;
    phone.style.transform = "translate(-50%, -50%) rotateX(0deg) rotateY(0deg)";
  };

  const badges = [
    { text: "Unlimited Streaming", desc: "Millions of songs without ads.", color: "#e8d9ff" },
    { text: "High Quality Audio", desc: "Crystal clear 320kbps sound.", color: "#d9ffd9" },
    { text: "Offline Mode", desc: "Download and listen anywhere.", color: "#ffe9d6" },
    { text: "Artist Support", desc: "Directly support your favorites.", color: "#d6f0ff" },
    { text: "Custom Playlists", desc: "Create & share with friends.", color: "#f8d6ff" },
    { text: "Cross-Platform", desc: "Use on phone, tablet & desktop.", color: "#fff5cc" },
    { text: "Ad-Free Experience", desc: "Enjoy music without interruptions.", color: "#ffd6d6" },
    { text: "Exclusive Content", desc: "Access special releases & podcasts.", color: "#d6fff4" },
  ];

  return (
    <section className="about-hero py-5">
      <div className="container text-center">
        <h1 className="fw-bold display-4 mb-3" data-aos="fade-up">
          Discover Music. Forever.
        </h1>

        <p className="lead mb-5 text-muted" data-aos="fade-up" data-aos-delay="200">
          Our platform brings artists, fans, and playlists together in one powerful space <br />
          — stream endlessly, share freely, and enjoy music anywhere.
        </p>

        <div
          className="orbit-container"
          data-aos="fade-up"
          data-aos-delay="400"
          style={{ perspective: "1000px" }} // Important for 3D tilt
        >
          <img
            src="/Shot.png"
            alt="Music App Mockup"
            className="img-fluid rounded-4 phone-image"
            ref={phoneRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />

          <div className="orbit">
            {badges.map((badge, index) => (
              <div
                key={index}
                className={`badge-item badge-${index + 1}`}
                style={{ background: badge.color }}
              >
                <strong>{badge.text}</strong>
                <p className="mb-0 small text-muted">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
