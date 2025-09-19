import { useEffect } from "react";
import { useAuth } from "../../contexts/authContext";
import { usePage } from "../../contexts/pageContext";
import "./styles/navStyles.css";
// Add page provider
// Add button component

function NavBar() {
  const { logout } = useAuth();
  const { page, setPage } = usePage();

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <div className="navBarContainer">
      <button className="navButton" onClick={() => setPage("start")}>
        Button 1
      </button>
      <button className="navButton" onClick={() => setPage("Button 2")}>
        Button 2
      </button>
      <button className="navButton" onClick={() => setPage("Button 3")}>
        Button 3
      </button>
      <button className="navButton" onClick={() => setPage("Button 4")}>
        Button 4
      </button>
      <button className="logoutButton" onClick={logout}>
        Log out
      </button>
    </div>
  );
}

export default NavBar;
