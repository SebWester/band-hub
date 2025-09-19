import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import { PageProvider } from "./contexts/pageContext";
import Start from "./pages/Start";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/protected/Dashboard";
import Profile from "./pages/protected/profile/Profile";
import Browse from "./pages/protected/browse/Browse";
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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/browse" element={<Browse />} />
          </Routes>
        </Router>
      </PageProvider>
    </AuthProvider>
  );
}

export default App;
