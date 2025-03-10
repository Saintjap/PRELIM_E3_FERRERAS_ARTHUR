import React from "react";

function DarkModeToggle({ user, setUser }) {
  const toggleDarkMode = () => {
    setUser({ ...user, settings: { darkMode: !user.settings.darkMode } });
  };

  return (
    <div className="dark-mode-toggle">
      <label className="switch">
        <input type="checkbox" checked={user.settings.darkMode} onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
      <span className="ml-2">Enable Dark Mode</span>
    </div>
  );
}

export default DarkModeToggle;
