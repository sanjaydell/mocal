import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function SystemContent() {
  return (
    <div>
      <FormControl>
        <span>Language</span>
        {/* <InputLabel id="demo-simple-select-label">Language</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="English"
          label="Language"
          // onChange={handleChange}
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="German">German</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SystemContent;
