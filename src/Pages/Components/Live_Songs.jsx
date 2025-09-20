export const Live_Songs = () => {
    return (
        <>
            <div className="partners-section mt-5">

                {/* Heading + Subheading */}
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <div>
                        <h2 className="homePageHeading" data-aos="fade-down" data-aos-delay="800">
                            Enjoy Premiere of a
                        </h2>
                        <h2 className="homePageSubHeading" data-aos="fade-down" data-aos-delay="800">
                            Song Live
                        </h2>
                    </div>
                    <div className="homePageTagline m-0">
                        See All <i class="lni lni-arrow-right"></i>
                    </div>
                </div>
                <div className="position-relative" data-aos="zoom-in" data-aos-delay="200">
                    <div className="concertDiv rounded-5 position-relative">
                        <div className="position-absolute bottom-0 start-0 d-flex justify-content-between align-items-center p-4 w-100 concertOverlay z-1">
                            <div>
                                <h3 className="homePageSubHeading text-white fw-bold">Christmas Crooners</h3>
                                <p className="homePageTagline text-white">Enjoy the sweet Christmas time in the company of the biggest crooners</p>
                            </div>
                            <div className="playBtn"><svg width="40" height="40" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)"><path d="M19.4357 13.9174C20.8659 13.0392 20.8659 10.9608 19.4357 10.0826L9.55234 4.01389C8.05317 3.09335 6.125 4.17205 6.125 5.93128L6.125 18.0688C6.125 19.828 8.05317 20.9067 9.55234 19.9861L19.4357 13.9174Z" fill="#343C54"/></svg></div>
                        </div>
                    </div>
                    <div className="secondaryConcert position-absolute start-50 translate-middle rounded-bottom-5" ></div>
                    <div className="tertiaryConcert position-absolute start-50 translate-middle rounded-bottom-5"></div>
                </div>
            </div>
        </>
    )
}
