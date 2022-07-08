import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        <img
          src="http://codepath-lifetracker.surge.sh/static/media/smartwatch-screen-digital-device.e2983a85.svg"
          alt="home pic"
        />
        <h1>Life Tracker</h1>
        <p>Helping you take back control of your world</p>
      </div>
    </div>
  );
}
