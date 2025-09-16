import { NavLink } from "react-router-dom";

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="position-relative footerDiv overflow-hidden">
        <div className="mb-5">
            <div className="d-flex justify-content-between align-items-center pt-4">
                <NavLink className="navbar-brand fw-bold font24" to="/">
                    <span className="logoDark">Au</span>dioNyx
                </NavLink>
                <div className="d-flex justify-content-start align-items-center gap-4 mt-3 socialIcons">
                <i class="lni lni-x"></i>
                <i class="lni lni-instagram"></i>
                <i class="lni lni-spotify-alt"></i>
                <i class="lni lni-facebook"></i>
                </div>
            </div>
        </div>
        <div className="footerContent d-flex justify-content-between align-items-center flex-wrap py-4">
            <div>
                <span>@ {year} AudioNyx</span>
                <span className="mx-3">|</span>
                <span>All Rights Reserved</span>
            </div>
            <div>
                <span className="me-3">Privacy Policy</span>
                <span className="mx-3">|</span>
                <span className="mx-3">Terms of Service</span>
                <span className="mx-3">|</span>
                <span className="mx-3">Contact Us</span>
            </div>
        </div>
        <div className="bottomFadeName text-center py-3 position-absolute bottom-0 start-50 translate-middle-x">
          AUDIONYX
        </div>
      </div>
    );
  };
  