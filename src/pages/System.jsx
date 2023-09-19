import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ViewScreen from "../components/ViewScreen";
import './System.scss'

function System() {
  return (
    <div className="system">
      <Header />
      <div className="content">
        <Sidebar />
        <ViewScreen />
      </div>
    </div>
  );
}

export default System;
