import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import NavBar from "./NavBar";
import "./styles/dashStyle.css";

function Dashboard() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />; // redirect to login
  }

  return (
    <div className="dashContainer">
      <NavBar />
      <div className="mainContainer">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
