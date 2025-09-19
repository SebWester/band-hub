import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import { PageProvider } from "./contexts/pageContext";
import Start from "./pages/Start";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/protected/Dashboard";
import ResetPassword from "./pages/ResetPass";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <PageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* Add protected routes below */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </PageProvider>
    </AuthProvider>
  );
}

export default App;
