import { useState, useRef, useEffect } from "react";

export const Home_song_preview = () => {
  // Songs array
  const songs = [
    {
      name: "Shape of You",
      artist: "Ed Sheeran",
      image: "Ed_sheeran.jpg",
      song: "Songs/shape_of_you.mp3",
    },
    {
      name: "Blinding Lights",
      artist: "The Weeknd",
      image: "weeknd.jpg",
      song: "Songs/blinding_lights.mp3",
    },
    {
      name: "Levitating",
      artist: "Dua Lipa",
      image: "dua_lipa.jpg",
      song: "Songs/levitating.mp3",
    },
    {
      name: "Stay",
      artist: "Justin Bieber & The Kid LAROI",
      image: "stay.jpg",
      song: "Songs/stay.mp3",
    },
    {
      name: "Believer",
      artist: "Imagine Dragons",
      image: "believer.jpg",
      song: "Songs/believer.mp3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  const audioRef = useRef(null);
  const animationRef = useRef(null);

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  // Smooth progress update
  const updateProgress = () => {
    if (audioRef.current) {
      const { currentTime, duration } = audioRef.current;
      setProgress((currentTime / duration) * 100);
      setCurrentTime(formatTime(currentTime));
      setDuration(formatTime(duration));
      animationRef.current = requestAnimationFrame(updateProgress);
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      cancelAnimationFrame(animationRef.current);
    } else {
      audioRef.current.play();
      animationRef.current = requestAnimationFrame(updateProgress);
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentIndex(nextIndex);
    setIsPlaying(false);
    setProgress(0);
  };

  const prevSong = () => {
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentIndex(prevIndex);
    setIsPlaying(false);
    setProgress(0);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
    setProgress(e.target.value);
  };

  const currentSong = songs[currentIndex];

  // Reset and auto-play when song changes
  useEffect(() => {
    const audio = audioRef.current;
    audio.pause();
    audio.load();
    setProgress(0);
    setCurrentTime("0:00");
    if (isPlaying) {
      audio.play();
      animationRef.current = requestAnimationFrame(updateProgress);
    }
  }, [currentIndex]);

  return (
    <>
      <div className="home-song-preview px-4">
        <div className="row mx-0">
          {/* Left Section */}
          <div
            className="col-lg-8 col-12 mb-4 mb-lg-0 rightSection p-4"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <div>
              <small>Available on</small>
              <div className="d-flex mt-2">
                <div className="whiteCircle me-2">
                  <i className="lni lni-apple-brand"></i>
                </div>
                <div className="whiteCircle me-2">
                  <i className="lni lni-spotify-alt"></i>
                </div>
                <div className="whiteCircle">
                  <i className="lni lni-google"></i>
                </div>
              </div>
            </div>

            <div>
              <p className="preview-subtitle mt-3">
                THE BEST SONGS & PODCASTS TO LISTEN TO RIGHT NOW
              </p>

              <h1 className="preview-heading">
                Every day we bring you <br /> the best <span>music vibes</span>
              </h1>

              {/* Song Player Card */}
              <div
                className="preview-episode-card d-flex flex-column mt-4 p-3 rounded-4 shadow-sm"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={currentSong.image}
                    alt={currentSong.name}
                    className="episode-img rounded-3 me-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h6 className="m-0">{currentSong.name}</h6>
                    <small className="font12">{currentSong.artist}</small>
                  </div>
                  <div className="ms-auto d-flex align-items-center gap-3 font20">
                    <i
                      className="lni lni-next-step-2 rotate180"
                      onClick={prevSong}
                      style={{ cursor: "pointer" }}
                    ></i>
                    {isPlaying ? (
                      <i
                        className="lni lni-pause"
                        onClick={togglePlayPause}
                        style={{ cursor: "pointer" }}
                      ></i>
                    ) : (
                      <i
                        className="lni lni-play"
                        onClick={togglePlayPause}
                        style={{ cursor: "pointer" }}
                      ></i>
                    )}
                    <i
                      className="lni lni-next-step-2"
                      onClick={nextSong}
                      style={{ cursor: "pointer" }}
                    ></i>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="d-flex align-items-center mt-3 w-100">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleSeek}
                    className="mx-2 flex-grow-1"
                  />
                </div>

                <audio ref={audioRef} src={currentSong.song}></audio>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div
            className="col-lg-4 col-12"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <div className="preview-side-card rounded-4">
              <img
                src="song_preview_3.jpg"
                alt="Song"
                className="w-100 rounded-4 mb-3 home_song_right_img"
              />
              <h5 className="fw-bold">Keep It!</h5>
              <p className="text-muted">
                Each week, hosts bring you trending music, artists, and fresh
                tracks to keep your vibes alive.
              </p>
              <hr className="my-4" />
              <h5 className="fw-bold">More Themes</h5>
              <div className="d-flex flex-wrap gap-2 mt-3">
                <span className="preview-tag"><svg className="me-1" width="16" height="16" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)"><path d="M7.75 14.9585C7.20497 14.6636 6.55664 14.5 5.875 14.5C5.00075 14.5 4.18131 14.7691 3.56431 15.2392C2.9467 15.7098 2.5 16.4138 2.5 17.25C2.5 18.0862 2.9467 18.7902 3.56431 19.2608C4.18131 19.7309 5.00075 20 5.875 20C6.74925 20 7.56869 19.7309 8.18569 19.2608C8.79111 18.7995 9.2323 18.1139 9.24948 17.2993C9.24983 17.29 9.24948 17.2101 9.24948 17.2007C9.2323 16.3861 8.79111 15.7005 8.18569 15.2392C8.05072 15.1364 7.90606 15.0432 7.75327 14.9603L7.75 14.9585Z" fill="#343C54"/><path d="M19.75 12.7085C19.205 12.4136 18.5566 12.25 17.875 12.25C17.0008 12.25 16.1813 12.5191 15.5643 12.9892C14.9467 13.4598 14.5 14.1638 14.5 15C14.5 15.8362 14.9467 16.5402 15.5643 17.0108C16.1813 17.4809 17.0008 17.75 17.875 17.75C18.7492 17.75 19.5687 17.4809 20.1857 17.0108C20.7911 16.5495 21.2323 15.8639 21.2495 15.0493C21.2498 15.04 21.2495 14.9601 21.2495 14.9507C21.2323 14.1361 20.7911 13.4505 20.1857 12.9892C20.0507 12.8864 19.9061 12.7932 19.7533 12.7103L19.75 12.7085Z" fill="#343C54"/><path opacity="0.4" d="M20.3613 3.7628C20.5805 3.72171 20.8069 3.78068 20.9785 3.92296C21.1502 4.06542 21.25 4.27704 21.25 4.50011V15.0216C21.25 15.031 21.2494 15.0406 21.249 15.0499C21.2494 15.0407 21.249 14.9624 21.249 14.9513C21.2318 14.1367 20.791 13.4506 20.1855 12.9894C20.0506 12.8866 19.9057 12.7929 19.7529 12.7101L19.75 12.7091V9.10948L9.25 11.1202L9.24902 17.2013C9.23185 16.3867 8.79097 15.7006 8.18555 15.2394C8.05061 15.1366 7.90568 15.0429 7.75293 14.9601L7.75 14.9591V6.75011C7.75006 6.38938 8.00684 6.07946 8.36133 6.0128L20.3613 3.7628Z" fill="#343C54"/></svg> Music</span>
                <span className="preview-tag"><svg className="me-1" width="16" height="16" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)"><path d="M7.75 14.9585C7.20497 14.6636 6.55664 14.5 5.875 14.5C5.00075 14.5 4.18131 14.7691 3.56431 15.2392C2.9467 15.7098 2.5 16.4138 2.5 17.25C2.5 18.0862 2.9467 18.7902 3.56431 19.2608C4.18131 19.7309 5.00075 20 5.875 20C6.74925 20 7.56869 19.7309 8.18569 19.2608C8.79111 18.7995 9.2323 18.1139 9.24948 17.2993C9.24983 17.29 9.24948 17.2101 9.24948 17.2007C9.2323 16.3861 8.79111 15.7005 8.18569 15.2392C8.05072 15.1364 7.90606 15.0432 7.75327 14.9603L7.75 14.9585Z" fill="#343C54"/><path d="M19.75 12.7085C19.205 12.4136 18.5566 12.25 17.875 12.25C17.0008 12.25 16.1813 12.5191 15.5643 12.9892C14.9467 13.4598 14.5 14.1638 14.5 15C14.5 15.8362 14.9467 16.5402 15.5643 17.0108C16.1813 17.4809 17.0008 17.75 17.875 17.75C18.7492 17.75 19.5687 17.4809 20.1857 17.0108C20.7911 16.5495 21.2323 15.8639 21.2495 15.0493C21.2498 15.04 21.2495 14.9601 21.2495 14.9507C21.2323 14.1361 20.7911 13.4505 20.1857 12.9892C20.0507 12.8864 19.9061 12.7932 19.7533 12.7103L19.75 12.7085Z" fill="#343C54"/><path opacity="0.4" d="M20.3613 3.7628C20.5805 3.72171 20.8069 3.78068 20.9785 3.92296C21.1502 4.06542 21.25 4.27704 21.25 4.50011V15.0216C21.25 15.031 21.2494 15.0406 21.249 15.0499C21.2494 15.0407 21.249 14.9624 21.249 14.9513C21.2318 14.1367 20.791 13.4506 20.1855 12.9894C20.0506 12.8866 19.9057 12.7929 19.7529 12.7101L19.75 12.7091V9.10948L9.25 11.1202L9.24902 17.2013C9.23185 16.3867 8.79097 15.7006 8.18555 15.2394C8.05061 15.1366 7.90568 15.0429 7.75293 14.9601L7.75 14.9591V6.75011C7.75006 6.38938 8.00684 6.07946 8.36133 6.0128L20.3613 3.7628Z" fill="#343C54"/></svg> Artists</span>
                <span className="preview-tag"><svg className="me-1" width="16" height="16" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)"><path d="M7.75 14.9585C7.20497 14.6636 6.55664 14.5 5.875 14.5C5.00075 14.5 4.18131 14.7691 3.56431 15.2392C2.9467 15.7098 2.5 16.4138 2.5 17.25C2.5 18.0862 2.9467 18.7902 3.56431 19.2608C4.18131 19.7309 5.00075 20 5.875 20C6.74925 20 7.56869 19.7309 8.18569 19.2608C8.79111 18.7995 9.2323 18.1139 9.24948 17.2993C9.24983 17.29 9.24948 17.2101 9.24948 17.2007C9.2323 16.3861 8.79111 15.7005 8.18569 15.2392C8.05072 15.1364 7.90606 15.0432 7.75327 14.9603L7.75 14.9585Z" fill="#343C54"/><path d="M19.75 12.7085C19.205 12.4136 18.5566 12.25 17.875 12.25C17.0008 12.25 16.1813 12.5191 15.5643 12.9892C14.9467 13.4598 14.5 14.1638 14.5 15C14.5 15.8362 14.9467 16.5402 15.5643 17.0108C16.1813 17.4809 17.0008 17.75 17.875 17.75C18.7492 17.75 19.5687 17.4809 20.1857 17.0108C20.7911 16.5495 21.2323 15.8639 21.2495 15.0493C21.2498 15.04 21.2495 14.9601 21.2495 14.9507C21.2323 14.1361 20.7911 13.4505 20.1857 12.9892C20.0507 12.8864 19.9061 12.7932 19.7533 12.7103L19.75 12.7085Z" fill="#343C54"/><path opacity="0.4" d="M20.3613 3.7628C20.5805 3.72171 20.8069 3.78068 20.9785 3.92296C21.1502 4.06542 21.25 4.27704 21.25 4.50011V15.0216C21.25 15.031 21.2494 15.0406 21.249 15.0499C21.2494 15.0407 21.249 14.9624 21.249 14.9513C21.2318 14.1367 20.791 13.4506 20.1855 12.9894C20.0506 12.8866 19.9057 12.7929 19.7529 12.7101L19.75 12.7091V9.10948L9.25 11.1202L9.24902 17.2013C9.23185 16.3867 8.79097 15.7006 8.18555 15.2394C8.05061 15.1366 7.90568 15.0429 7.75293 14.9601L7.75 14.9591V6.75011C7.75006 6.38938 8.00684 6.07946 8.36133 6.0128L20.3613 3.7628Z" fill="#343C54"/></svg> Lyrics</span>
                <span className="preview-tag"><svg className="me-1" width="16" height="16" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)"><path d="M7.75 14.9585C7.20497 14.6636 6.55664 14.5 5.875 14.5C5.00075 14.5 4.18131 14.7691 3.56431 15.2392C2.9467 15.7098 2.5 16.4138 2.5 17.25C2.5 18.0862 2.9467 18.7902 3.56431 19.2608C4.18131 19.7309 5.00075 20 5.875 20C6.74925 20 7.56869 19.7309 8.18569 19.2608C8.79111 18.7995 9.2323 18.1139 9.24948 17.2993C9.24983 17.29 9.24948 17.2101 9.24948 17.2007C9.2323 16.3861 8.79111 15.7005 8.18569 15.2392C8.05072 15.1364 7.90606 15.0432 7.75327 14.9603L7.75 14.9585Z" fill="#343C54"/><path d="M19.75 12.7085C19.205 12.4136 18.5566 12.25 17.875 12.25C17.0008 12.25 16.1813 12.5191 15.5643 12.9892C14.9467 13.4598 14.5 14.1638 14.5 15C14.5 15.8362 14.9467 16.5402 15.5643 17.0108C16.1813 17.4809 17.0008 17.75 17.875 17.75C18.7492 17.75 19.5687 17.4809 20.1857 17.0108C20.7911 16.5495 21.2323 15.8639 21.2495 15.0493C21.2498 15.04 21.2495 14.9601 21.2495 14.9507C21.2323 14.1361 20.7911 13.4505 20.1857 12.9892C20.0507 12.8864 19.9061 12.7932 19.7533 12.7103L19.75 12.7085Z" fill="#343C54"/><path opacity="0.4" d="M20.3613 3.7628C20.5805 3.72171 20.8069 3.78068 20.9785 3.92296C21.1502 4.06542 21.25 4.27704 21.25 4.50011V15.0216C21.25 15.031 21.2494 15.0406 21.249 15.0499C21.2494 15.0407 21.249 14.9624 21.249 14.9513C21.2318 14.1367 20.791 13.4506 20.1855 12.9894C20.0506 12.8866 19.9057 12.7929 19.7529 12.7101L19.75 12.7091V9.10948L9.25 11.1202L9.24902 17.2013C9.23185 16.3867 8.79097 15.7006 8.18555 15.2394C8.05061 15.1366 7.90568 15.0429 7.75293 14.9601L7.75 14.9591V6.75011C7.75006 6.38938 8.00684 6.07946 8.36133 6.0128L20.3613 3.7628Z" fill="#343C54"/></svg> Movies</span>
                <span className="preview-tag"><svg className="me-1" width="16" height="16" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)"><path d="M7.75 14.9585C7.20497 14.6636 6.55664 14.5 5.875 14.5C5.00075 14.5 4.18131 14.7691 3.56431 15.2392C2.9467 15.7098 2.5 16.4138 2.5 17.25C2.5 18.0862 2.9467 18.7902 3.56431 19.2608C4.18131 19.7309 5.00075 20 5.875 20C6.74925 20 7.56869 19.7309 8.18569 19.2608C8.79111 18.7995 9.2323 18.1139 9.24948 17.2993C9.24983 17.29 9.24948 17.2101 9.24948 17.2007C9.2323 16.3861 8.79111 15.7005 8.18569 15.2392C8.05072 15.1364 7.90606 15.0432 7.75327 14.9603L7.75 14.9585Z" fill="#343C54"/><path d="M19.75 12.7085C19.205 12.4136 18.5566 12.25 17.875 12.25C17.0008 12.25 16.1813 12.5191 15.5643 12.9892C14.9467 13.4598 14.5 14.1638 14.5 15C14.5 15.8362 14.9467 16.5402 15.5643 17.0108C16.1813 17.4809 17.0008 17.75 17.875 17.75C18.7492 17.75 19.5687 17.4809 20.1857 17.0108C20.7911 16.5495 21.2323 15.8639 21.2495 15.0493C21.2498 15.04 21.2495 14.9601 21.2495 14.9507C21.2323 14.1361 20.7911 13.4505 20.1857 12.9892C20.0507 12.8864 19.9061 12.7932 19.7533 12.7103L19.75 12.7085Z" fill="#343C54"/><path opacity="0.4" d="M20.3613 3.7628C20.5805 3.72171 20.8069 3.78068 20.9785 3.92296C21.1502 4.06542 21.25 4.27704 21.25 4.50011V15.0216C21.25 15.031 21.2494 15.0406 21.249 15.0499C21.2494 15.0407 21.249 14.9624 21.249 14.9513C21.2318 14.1367 20.791 13.4506 20.1855 12.9894C20.0506 12.8866 19.9057 12.7929 19.7529 12.7101L19.75 12.7091V9.10948L9.25 11.1202L9.24902 17.2013C9.23185 16.3867 8.79097 15.7006 8.18555 15.2394C8.05061 15.1366 7.90568 15.0429 7.75293 14.9601L7.75 14.9591V6.75011C7.75006 6.38938 8.00684 6.07946 8.36133 6.0128L20.3613 3.7628Z" fill="#343C54"/></svg> Celebrity</span>
                <span className="preview-tag"><svg className="me-1" width="16" height="16" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)"><path d="M7.75 14.9585C7.20497 14.6636 6.55664 14.5 5.875 14.5C5.00075 14.5 4.18131 14.7691 3.56431 15.2392C2.9467 15.7098 2.5 16.4138 2.5 17.25C2.5 18.0862 2.9467 18.7902 3.56431 19.2608C4.18131 19.7309 5.00075 20 5.875 20C6.74925 20 7.56869 19.7309 8.18569 19.2608C8.79111 18.7995 9.2323 18.1139 9.24948 17.2993C9.24983 17.29 9.24948 17.2101 9.24948 17.2007C9.2323 16.3861 8.79111 15.7005 8.18569 15.2392C8.05072 15.1364 7.90606 15.0432 7.75327 14.9603L7.75 14.9585Z" fill="#343C54"/><path d="M19.75 12.7085C19.205 12.4136 18.5566 12.25 17.875 12.25C17.0008 12.25 16.1813 12.5191 15.5643 12.9892C14.9467 13.4598 14.5 14.1638 14.5 15C14.5 15.8362 14.9467 16.5402 15.5643 17.0108C16.1813 17.4809 17.0008 17.75 17.875 17.75C18.7492 17.75 19.5687 17.4809 20.1857 17.0108C20.7911 16.5495 21.2323 15.8639 21.2495 15.0493C21.2498 15.04 21.2495 14.9601 21.2495 14.9507C21.2323 14.1361 20.7911 13.4505 20.1857 12.9892C20.0507 12.8864 19.9061 12.7932 19.7533 12.7103L19.75 12.7085Z" fill="#343C54"/><path opacity="0.4" d="M20.3613 3.7628C20.5805 3.72171 20.8069 3.78068 20.9785 3.92296C21.1502 4.06542 21.25 4.27704 21.25 4.50011V15.0216C21.25 15.031 21.2494 15.0406 21.249 15.0499C21.2494 15.0407 21.249 14.9624 21.249 14.9513C21.2318 14.1367 20.791 13.4506 20.1855 12.9894C20.0506 12.8866 19.9057 12.7929 19.7529 12.7101L19.75 12.7091V9.10948L9.25 11.1202L9.24902 17.2013C9.23185 16.3867 8.79097 15.7006 8.18555 15.2394C8.05061 15.1366 7.90568 15.0429 7.75293 14.9601L7.75 14.9591V6.75011C7.75006 6.38938 8.00684 6.07946 8.36133 6.0128L20.3613 3.7628Z" fill="#343C54"/></svg>TV</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
