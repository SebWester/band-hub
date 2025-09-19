// src/pages/Dashboard.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import NavBar from "./NavBar";
import "./styles/dashStyle.css";

// Add page provider

function Dashboard() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    // Return null while navigate runs
    return null;
  }

  return (
    <div className="dashContainer">
      <NavBar />
      <h1>Dashboard</h1>

      <p>✅ Du är inloggad</p>
    </div>
  );
}

export default Dashboard;
