import { useAuth } from "../../contexts/authContext";
import "./styles/navStyles.css";
// Add page provider
// Add button component

function NavBar() {
  const { logout } = useAuth();

  return (
    <div className="navBarContainer">
      <button className="navButton">Button 1</button>
      <button className="navButton">Button 2</button>
      <button className="navButton">Button 3</button>
      <button className="navButton">Button 4</button>
      <button className="logoutButton" onClick={logout}>
        Log out
      </button>
    </div>
  );
}

export default NavBar;
