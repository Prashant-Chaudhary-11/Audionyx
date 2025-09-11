export const Home_partners = () => {
    return (
        <>
            <div className="partners-section text-center my-5">
                {/* Logos Row with Names */}
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-5 mb-5">
                    
                    <div className="partner-item" data-aos="fade-down">
                        <img src="spotify.png" alt="Spotify" className="partner-logo" />
                        <p className="partner-name">Spotify</p>
                    </div>

                    <div className="partner-item" data-aos="fade-down" data-aos-delay="200">
                        <img src="sony_music.jpeg" alt="Sony Music" className="partner-logo" />
                        <p className="partner-name">Sony Music</p>
                    </div>

                    <div className="partner-item" data-aos="fade-down" data-aos-delay="400">
                        <img src="warner_music.svg" alt="Warner Music" className="partner-logo" />
                        <p className="partner-name">Warner Music</p>
                    </div>

                    <div className="partner-item" data-aos="fade-down" data-aos-delay="600">
                        <img src="youtube_music.png" alt="YouTube Music" className="partner-logo" />
                        <p className="partner-name">YouTube Music</p>
                    </div>

                    <div className="partner-item" data-aos="fade-down" data-aos-delay="800">
                        <img src="apple_music.png" alt="Apple Music" className="partner-logo" />
                        <p className="partner-name">Apple Music</p>
                    </div>
                </div>

                {/* Heading + Subheading */}
                <h2 className="homePageHeading" data-aos="fade-down" data-aos-delay="1000">
                    Empowering Music Lovers Through Streaming Innovation
                </h2>
                <p className="homePageTagline" data-aos="fade-down" data-aos-delay="1200">
                    Discover endless songs, connect with artists, and enjoy premium audio experiences.<br />
                    AudioNyx transforms your passion for music into reality.
                </p>
            </div>
        </>
    )
}
