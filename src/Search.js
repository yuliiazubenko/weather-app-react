import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(responce) {
    setLoaded(true);
    setWeather({
      temperature: responce.data.main.temp,
      wind: responce.data.wind.speed,
      humidity: responce.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${responce.data.weather[0].icon}@2x.png`,
      description: responce.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "3cf72f45f547c571ec6192630ba012c0";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={updateCity} />
      <button type="submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Wind: {weather.wind}km\h</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
        <p>
          Open-source code by{" "}
          <a
            href="https://github.com/yuliiazubenko/weather-app-react"
            target="blank"
          >
            Yuliia Zubenko
          </a>
        </p>
      </div>
    );
  } else {
    return form;
  }
}
