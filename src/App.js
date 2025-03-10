import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { FaUser, FaHome, FaCog } from "react-icons/fa";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function Sidebar({ darkMode }) {
  const location = useLocation();

  return (
    <div className={`sidebar ${darkMode ? "sidebar-dark" : "sidebar-light"}`}>
      <h3 className="text-center mt-3">PRELIM EXAM APP</h3>
      <nav className="nav flex-column mt-4">
        <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/"><FaHome /> Home</Link>
        <Link className={`nav-link ${location.pathname === "/profile" ? "active" : ""}`} to="/profile"><FaUser /> Profile</Link>
        <Link className={`nav-link ${location.pathname === "/settings" ? "active" : ""}`} to="/settings"><FaCog /> Settings</Link>
      </nav>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(() => {
    const savedSettings = JSON.parse(localStorage.getItem("userSettings")) || { name: "Guest User", settings: { darkMode: false } };
    return savedSettings;
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", user.settings.darkMode);
    localStorage.setItem("userSettings", JSON.stringify(user));
  }, [user]);

  return (
    <Router>
      <div className="app-layout">
        <Sidebar darkMode={user.settings.darkMode} />
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
            <Route path="/settings" element={<Settings user={user} setUser={setUser} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
