import React from "react";
import "./Login.scss";
import Card from "@mui/material/Card";
import { Button, Link, TextField } from "@mui/material";
// import background from '/public/background.png'

function Login() {
  return (
    <div
      className="login"
      style={{
        backgroundImage: `url(/background.png)`,
      }}
    >
      <Card className="card">
        <img
          src="/logo.png"
          alt="logo"
          style={{ width: "156px", height: "80px" }}
        />
        <TextField id="standard-basic" label="Enter Username/ Email Address" variant="standard" />
        <TextField id="standard-basic" label="Enter Password" variant="standard" />
        <Link>Forgot Password?</Link>
        <Button variant="contained">Log in</Button>
        <div className="or" style={{ display: "flex", flexDirection: "row" }}>
          <hr />
          OR
          <hr />
        </div>
        <Button variant="outlined" startIcon={() => {}}>
          Sign Up with Google
        </Button>
        <Button variant="outlined" startIcon={() => {}}>
          Sign Up with Microsoft
        </Button>
        <span>
          Already have an account? <Link>Log in</Link>
        </span>
      </Card>
    </div>
  );
}

export default Login;
