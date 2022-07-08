import * as React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src="http://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg" />
      </Link>
      <Link className="navbar-link" to="/activity">
        <Button className="navbar-button" variant="outlined">Activity</Button>
      </Link>
      <Link className="navbar-link" to="/exercise">
      <Button className="navbar-button" variant="outlined">Exercise</Button>
      </Link>
      <Link className="navbar-link" to="/nutrition">
        <Button className="navbar-button" variant="outlined">Nutrition</Button>
      </Link>
      <Link className="navbar-link" to="/sleep">
      <Button className="navbar-button" variant="outlined">Sleep</Button>
      </Link>
      <Link className="navbar-link" to="/login">
      <Button className="navbar-button" variant="contained">LOGIN</Button>
      </Link>
      <Link className="navbar-link" to="/signup">
      <Button className="navbar-button" variant="contained">SIGN UP</Button>
      </Link>
    </div>
  );
}
