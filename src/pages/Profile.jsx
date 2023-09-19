import React from "react";
import ProfileDetails from "../components/ProfileDetails";
import Sidebar from "../components/Sidebar";
import './Profile.scss'

function Profile() {
  return (
    <div className="profile">
      <Sidebar />
      <ProfileDetails />
    </div>
  );
}

export default Profile;
