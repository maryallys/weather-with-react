import React from "react";
import Icons from "./Icons";
import "./styles.css";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max) - 273;
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min) - 273;
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="Weather-Forecast-day">{day()}</div>
            <Icons code={props.data.weather[0].icon} size={34} />
            <div className="Weather-Forecast-temp>">
              <span className="Weather-Forecast-temp-max"> {maxTemp()}</span>
              <span className="Weather-Forecast-temp-min"> {minTemp()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
