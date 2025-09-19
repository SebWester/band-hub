// src/pages/Dashboard.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { usePage } from "../../contexts/pageContext";
import NavBar from "./NavBar";
import Profile from "./profile/Profile";
import Browse from "./browse/Browse";
import "./styles/dashStyle.css";

// Add page provider

// Change to component later
const fakePage = (text: string) => {
  return (
    <div className="mainContainer">
      <h1>Dashboard</h1>
      {text}
    </div>
  );
};

const renderPage = (page: string) => {
  switch (page) {
    case "start":
      return fakePage(page);
    case "profile":
      return <Profile />;
    case "browse":
      return <Browse />;
    case "Button 4":
      return fakePage(page);
  }
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

      {renderPage(page)}
    </div>
  );
}

export default Dashboard;
