import React from "react";

function Profile({ user, setUser }) {
  const handleNameChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      name: e.target.value,
    }));
  };

  return (
    <div className="glass-card">
      <img
        src="arthurpic.jpg"
        alt="Profile"
        className="rounded-circle mb-3"
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
      />
      <h4>{user.name}</h4>
      <input
        type="text"
        className="form-control"
        value={user.name}
        onChange={handleNameChange}
      />
    </div>
  );
}

export default Profile;
