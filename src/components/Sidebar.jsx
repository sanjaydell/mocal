import React from "react";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <nav className="sidebar">
      <h3>Settings</h3>
      <div className="searchbox">Search</div>
      <h4 className="general">General</h4>
      <div className="genralTab">
        <span>System</span>
      </div>
      <div className="genralTab">
        <span>profile</span>
      </div>
    </nav>
  );
}

export default Sidebar;
