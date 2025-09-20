import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import { PageProvider } from "./contexts/pageContext";
import Start from "./pages/Start";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/protected/Dashboard";
import Index from "./pages/protected/index/Index";
import Profile from "./pages/protected/profile/Profile";
import Browse from "./pages/protected/browse/Browse";
import Collab from "./pages/protected/collab/Collab";
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
            <Route path="/dashboard/*" element={<Dashboard />}>
              {/* Dash entry point */}
              <Route index element={<Index />} />
              <Route path="index" element={<Index />} />
              <Route path="profile" element={<Profile />} />
              <Route path="browse" element={<Browse />} />
              <Route path="collab" element={<Collab />} />
              {/* Add more here */}
            </Route>
            ;{/* catch-all */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </PageProvider>
    </AuthProvider>
  );
}

export default App;
