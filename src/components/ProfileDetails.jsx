import React from "react";
import "./ProfileDetails.scss";
import { Button, Typography } from "@mui/material";
import { profileDetails, workDetails } from "../data/profileDetails";

function ProfileDetails() {
  return (
    <div className="profileDetails">
      <div className="gridContainer">
        {profileDetails.map((detail) => {
          return (
            <div className="gridItem">
              <Typography className="h15" variant="h15">
                {detail.fieldName}
              </Typography>
              <Typography className="h16" variant="h16">
                {detail.value}
              </Typography>
            </div>
          );
        })}
      </div>
      <div class="separator"><h3>WORK DETAILS</h3></div>
      <div className="gridContainer">
        {workDetails.map((detail) => {
          return (
            <div className="gridItem">
              <Typography className="h15" variant="h15">
                {detail.fieldName}
              </Typography>
              <Typography className="h16" variant="h16">
                {detail.value}
              </Typography>
            </div>
          );
        })}
      </div>
      <h3>Close Account</h3>
      <h4>Permanently delete all account information and services data.</h4>
      <Button>Close Account</Button>
    </div>
  );
}

export default ProfileDetails;
