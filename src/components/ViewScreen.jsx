import React from "react";
import InternalSideBar from "./InternalSideBar";
import SystemContent from "./SystemContent";

function ViewScreen() {
  return (
    <div className="viewscreen">
      <InternalSideBar />
      <SystemContent />
    </div>
  );
}

export default ViewScreen;
