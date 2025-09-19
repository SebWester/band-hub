// src/pages/Dashboard.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

function Dashboard() {
  const { isAuthenticated, logout } = useAuth();
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
    <div>
      <h1>Dashboard</h1>

      <p>✅ Du är inloggad</p>
      <button onClick={logout}>Log out</button>
    </div>
  );
}

export default Dashboard;
