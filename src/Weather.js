import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              className="form-control"
              type="search"
              placeholder="Type a city"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <button className="btn btn-primary w-100">Search</button>
          </div>
        </div>
      </form>

      <h1>Lisbon</h1>
      <ul>
        <li>Monday 07:00</li>
        <li>Cloudy</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
            className="float-left"
          />
          <div className="float-left">
            <span className="temperature">6</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 65%</li>
            <li>Wind: 10 km\h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
