import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPass";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Add protected routes below */}
      </Routes>
    </Router>
  );
}

export default App;
