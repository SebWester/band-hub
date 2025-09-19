import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { usePage } from "../../contexts/pageContext";
import "./styles/navStyles.css";
// Add page provider
// Add button component

function NavBar() {
  const { logout } = useAuth();
  const { page, setPage } = usePage();
  const [showNavBar, setShowNavbar] = useState(true);

  const navBarIcon = showNavBar ? (
    <i className="fa-solid fa-chevron-left"></i>
  ) : (
    <i className="fa-solid fa-chevron-right"></i>
  );
  const navBarClass = showNavBar ? "navBarContainer" : "hideNavBar";
  const showNavLinks = showNavBar ? "displayLinks" : "hideLinks";

  // Remove later
  useEffect(() => {
    console.log(page);
  }, [page]);

  const toggleDisplayNavBar = () => {
    setShowNavbar((prev) => !prev);
  };

  return (
    <div className={navBarClass}>
      <button className="collapseButton" onClick={toggleDisplayNavBar}>
        {navBarIcon}
      </button>
      <div className={showNavLinks}>
        <button className="navButton" onClick={() => setPage("start")}>
          Start
        </button>
        <button className="navButton" onClick={() => setPage("profile")}>
          Profile
        </button>
        <button className="navButton" onClick={() => setPage("browse")}>
          Browse
        </button>
        <button className="navButton" onClick={() => setPage("Button 4")}>
          Button 4
        </button>

        <button className="logoutButton" onClick={logout}>
          Log out
        </button>
      </div>
    </div>
  );
}

export default NavBar;
