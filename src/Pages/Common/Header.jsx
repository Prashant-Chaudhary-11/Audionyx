import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg px-4">
      <div className="container-fluid ">
        {/* Brand */}
        <NavLink className="navbar-brand fw-bold" to="/">
          <span className="logoDark">Au</span>dioNyx
        </NavLink>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <span></span>
          {/* Left side menu */}
          <ul className="navbar-nav routingNav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                to="/songs"
              >
                Songs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                to="/artists"
              >
                Artists
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                to="/premium"
              >
                Premium
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Right side (Auth) */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="custom-outline-btn me-2" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="custom-btn" to="/signup">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
