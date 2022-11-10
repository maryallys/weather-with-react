import React, { useState } from "react";
import axios from "axios";
import Details from "./Details";
import MainCity from "./MainCity";
import "./styles.css";

export default function Search() {
  let [city, setCity] = useState("null");
  let [status, setStatus] = useState(false);
  let [cityInfo, setCityInfo] = useState({
    temperatureMax: "",
    temperatureMin: "",
    description: "",
    humidity: "",
    wind: "",
    icon: "",
  });

  function showTemperature(response) {
    setStatus(true);
    setCityInfo({
      temperatureMax: response.data.main.temp_max,
      temperatureMin: response.data.main.temp_min,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=500df23a19b510acb3b117489ca64dfa`;
    axios.get(apiUrl).then(showTemperature);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} class="search">
      <input type="search" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (status) {
    return (
      <div>
        <MainCity
          city={city}
          temperatureMax={cityInfo.temperatureMax}
          temperatureMin={cityInfo.temperatureMin}
          icon={cityInfo.icon}
          description={cityInfo.description}
        />
        <Details
          description={cityInfo.description}
          humidity={cityInfo.humidity}
          wind={cityInfo.wind}
        />
        {form}
      </div>
    );
  } else {
    return (
      <div>
        <h3> Type your city</h3>
        {form}
      </div>
    );
  }
}
