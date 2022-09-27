import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Weatherinfo from "./Weatherinfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponce(responce) {
    setWeatherData({
      ready: true,
      temperature: responce.data.main.temp,
      humidity: responce.data.main.humidity,
      date: new Date(responce.data.dt * 1000),
      description: responce.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: responce.data.wind.speed,
      city: responce.data.name,
    });
  }

  function search() {
    const apiKey = "3cf72f45f547c571ec6192630ba012c0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponce);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="Type a city"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <button className="btn btn-primary w-100">Search</button>
            </div>
          </div>
        </form>
        <Weatherinfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
