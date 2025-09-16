import React, { useState } from "react";

export const MusicBrowse = () => {
  const categories = [
    { id: "01", name: "Pop Hits", count: 152, img: "pop.jpg" },
    { id: "02", name: "Rock Anthems", count: 98, img: "rock.jpg" },
    { id: "03", name: "Hip Hop", count: 87, img: "hip_hop.jpg" },
    { id: "04", name: "Chill Vibes", count: 120, img: "chill.jpg" },
    { id: "05", name: "Indie", count: 64, img: "indie.jpg" },
  ];

  const [activeIndex, setActiveIndex] = useState(2); // default = 3rd item (0-based)

  const features = [
    "100% Ad-free listening",
    "100% Personalized soundtracks",
    "100% Human-curated playlists",
    "100% Safe and secured",
    "100% Mood-matching tunes",
  ];

  return (
    <div className="music-browse">
      <h2 className="homePageHeading text-center" data-aos="fade-up"
        data-aos-delay="200">
        Discover <span>music made for you</span>
      </h2>
      <p className="homePageTagline mb-2 text-center" data-aos="fade-up" data-aos-delay="400">
        Discover soulful sounds from around the world.
        Curated by real artists, shared by real people.
      </p>
      <div className="hero-section image_section_browse d-flex flex-column flex-md-row align-items-center justify-content-between mb-5 position-relative">
        {/* Left Side - Features */}
        <div className="hero-text mb-4 mb-md-0 position-absolute top-50 start-0 translate-middle-y" data-aos="fade-right"
          data-aos-delay="600">
          <ul className="list-unstyled">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`mb-3 listmini rounded-pill d-flex align-items-center p-3 border border-light ${activeIndex === index ? "active" : ""
                  }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(2)} // reset to 3rd if no hover
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1385 2.29633C11.6899 2.06789 12.3094 2.06789 12.8608 2.29633L19.409 5.00923C20.1849 5.33068 20.7473 6.07313 20.7701 6.95597C20.8871 11.5013 19.4296 17.7631 13.067 21.5139C12.4101 21.9012 11.5955 21.9047 10.9353 21.5237C4.43153 17.7707 3.09402 11.4935 3.22752 6.95318C3.2534 6.07287 3.81392 5.33089 4.59034 5.00922L11.1385 2.29633ZM15.507 8.71521C15.2141 8.42231 14.7393 8.42231 14.4464 8.71521L10.9648 12.1967L9.55353 10.7854C9.26063 10.4925 8.78576 10.4926 8.49287 10.7854C8.19998 11.0783 8.19998 11.5532 8.49287 11.8461L10.4345 13.7877C10.7274 14.0806 11.2023 14.0806 11.4952 13.7877L15.507 9.77587C15.7999 9.48297 15.7999 9.0081 15.507 8.71521Z"
                    fill="#343C54"
                  />
                </svg>
                <span className="ms-2">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="hero-image text-center">
          <img
            src="discover_4.png"
            alt="Music Hero"
            className="img-fluid rounded"
            data-aos="zoom-in"
            data-aos-delay="800"
          />
        </div>


        <div className="hero-text mb-4 mb-md-0 position-absolute top-50 end-0 translate-middle-y" data-aos="fade-left"
          data-aos-delay="1000">
          <div className="border border-3 border-light-subtle p-3 rounded-5 text-center shadow-sm top_browse_card mb-5" data-aos="flip-left"
            data-aos-delay="1200">
            <small className="border border-secondary rounded-pill py-1 px-3 mb-3 font10 bg-body-secondary">Chord</small>
            <h3 className="mt-2">10+ Melodies</h3>
            <i class="lni lni-check-square-2 font26 rotateTick"></i>
            <div className="d-flex justify-content-center align-items-center gap-2 flex-wrap number-strip">
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
              <span>11</span>
              <span>12</span>
              {/* <span>13</span> */}
            </div>
          </div>
          <div className="border border-3 border-light-subtle p-3 rounded-5 text-center shadow-sm bottom_browse_card" data-aos="flip-right"
            data-aos-delay="1200">
            <small className="border border-secondary rounded-pill py-1 px-3 mb-3 font10 bg-body-secondary">Scales</small>
            <h3 className="mt-2">10+ Genres</h3>
            <i class="lni lni-check-square-2 font26 rotateTick"></i>
            <div className="d-flex justify-content-center align-items-center gap-2 flex-wrap number-strip">
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
              <span>11</span>
              <span>12</span>
              {/* <span>13</span> */}
            </div>
          </div>
        </div>
      </div>

      {/* Browse by Genre */}
      <h2 className="browse-subtitle text-center mt-5" data-aos="fade-up"
        data-aos-delay="1400">
        Or <span>browse by genre</span>
      </h2>

      <div className="browse-list mt-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={1600 + i * 200}
            className="browse-item d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center gap-3">
              <span className="cat-number">{cat.id}</span>
              <span className="cat-name">{cat.name}</span>
              <img src={cat.img} alt="" className="browse_img" />
            </div>
            <div className="d-flex align-items-center">
              <span className="cat-count me-2">{cat.count} Songs</span>
              <svg className="me-1" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)"><path d="M7.75 14.9585C7.20497 14.6636 6.55664 14.5 5.875 14.5C5.00075 14.5 4.18131 14.7691 3.56431 15.2392C2.9467 15.7098 2.5 16.4138 2.5 17.25C2.5 18.0862 2.9467 18.7902 3.56431 19.2608C4.18131 19.7309 5.00075 20 5.875 20C6.74925 20 7.56869 19.7309 8.18569 19.2608C8.79111 18.7995 9.2323 18.1139 9.24948 17.2993C9.24983 17.29 9.24948 17.2101 9.24948 17.2007C9.2323 16.3861 8.79111 15.7005 8.18569 15.2392C8.05072 15.1364 7.90606 15.0432 7.75327 14.9603L7.75 14.9585Z" fill="#343C54" /><path d="M19.75 12.7085C19.205 12.4136 18.5566 12.25 17.875 12.25C17.0008 12.25 16.1813 12.5191 15.5643 12.9892C14.9467 13.4598 14.5 14.1638 14.5 15C14.5 15.8362 14.9467 16.5402 15.5643 17.0108C16.1813 17.4809 17.0008 17.75 17.875 17.75C18.7492 17.75 19.5687 17.4809 20.1857 17.0108C20.7911 16.5495 21.2323 15.8639 21.2495 15.0493C21.2498 15.04 21.2495 14.9601 21.2495 14.9507C21.2323 14.1361 20.7911 13.4505 20.1857 12.9892C20.0507 12.8864 19.9061 12.7932 19.7533 12.7103L19.75 12.7085Z" fill="#343C54" /><path opacity="0.4" d="M20.3613 3.7628C20.5805 3.72171 20.8069 3.78068 20.9785 3.92296C21.1502 4.06542 21.25 4.27704 21.25 4.50011V15.0216C21.25 15.031 21.2494 15.0406 21.249 15.0499C21.2494 15.0407 21.249 14.9624 21.249 14.9513C21.2318 14.1367 20.791 13.4506 20.1855 12.9894C20.0506 12.8866 19.9057 12.7929 19.7529 12.7101L19.75 12.7091V9.10948L9.25 11.1202L9.24902 17.2013C9.23185 16.3867 8.79097 15.7006 8.18555 15.2394C8.05061 15.1366 7.90568 15.0429 7.75293 14.9601L7.75 14.9591V6.75011C7.75006 6.38938 8.00684 6.07946 8.36133 6.0128L20.3613 3.7628Z" fill="#343C54" /></svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
