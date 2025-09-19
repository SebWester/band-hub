import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

import "./styles/navStyles.css";
// Add page provider
// Add button component

function NavBar() {
  const { logout } = useAuth();
  const [showNavBar, setShowNavbar] = useState(true);

  const navBarIcon = showNavBar ? (
    <i className="fa-solid fa-chevron-left"></i>
  ) : (
    <i className="fa-solid fa-chevron-right"></i>
  );
  const navBarClass = showNavBar ? "navBarContainer" : "hideNavBar";
  const showNavLinks = showNavBar ? "displayLinks" : "hideLinks";

  const toggleDisplayNavBar = () => {
    setShowNavbar((prev) => !prev);
  };

  return (
    <div className={navBarClass}>
      <button className="collapseButton" onClick={toggleDisplayNavBar}>
        {navBarIcon}
      </button>
      <div className={showNavLinks}>
        {/* <button className="navButton"> */}
        <Link className="navLink navButton" to="/dashboard/start">
          Start
        </Link>
        {/* </button> */}
        {/* <button className="navButton"> */}
        <Link className="navLink navButton" to="/dashboard/profile">
          Profile
        </Link>
        {/* </button> */}
        {/* <button className="navButton"> */}
        <Link className="navLink navButton" to="/dashboard/browse">
          Browse
        </Link>
        {/* </button> */}

        <button className="logoutButton" onClick={logout}>
          Log out
        </button>
      </div>
    </div>
  );
}

export default NavBar;
