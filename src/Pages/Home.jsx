import { Home_partners } from "./Components/Home_partners"

export const Home = () => {
    return (
        <>
        <div className="text-center homePage">
            <div className="d-flex justify-content-center align-items-center mb-4 home_circle_group">
                <img src="home_1.jpg" alt="" className="home_circle_img" />
                <img src="home_2.jpg" alt="" className="home_circle_img" />
                <img src="home_3.jpg" alt="" className="home_circle_img" />
                <span className="home_circle_div">+</span>
            </div>
            <h1 className="homePageHeading">Discover</h1>
            <h1 className="homePageHeading">Endless Music Vibes</h1>
            <p className="homePageTagline">
                Stream your favorite tracks, explore new artists, and create playlists that match your mood. <br />
                Your soundtrack, anytime and anywhere.
            </p>
            <div>
                <button className="custom-btn homePageBtn me-3">Get Started</button>
                <button className="custom-outline-btn homePageBtn">Explore Music</button>
            </div>
        </div>
        <div className="d-flex justify-content-between align-items-center home_bottom_img_group">
            <img src="home_4.jpg" alt="" className="home_bottom_img_circle" />
            <img src="home_5.jpg" alt="" className="home_bottom_img" />
            <img src="home_6.jpg" alt="" className="home_bottom_img_circle" />
            <img src="home_7.jpg" alt="" className="home_bottom_img" />
        </div>
        <Home_partners />
        </>
    )
}
