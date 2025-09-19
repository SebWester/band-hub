// src/pages/Dashboard.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { usePage } from "../../contexts/pageContext";
import NavBar from "./NavBar";
import "./styles/dashStyle.css";

// Add page provider

// Remove later
const fakePage = (text: string) => {
  return (
    <div className="fakeContainer">
      <h1>Dashboard</h1>
      {text}
    </div>
  );
};

function Dashboard() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { page } = usePage();

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

      {fakePage(page)}
    </div>
  );
}

export default Dashboard;
