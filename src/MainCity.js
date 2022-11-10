import "./styles.css";
import React from "react";

export default function MainCity(props) {
  return (
    <div className="col-6 city">
      <h1 id="mainCity">{props.city}</h1>
      <h2 className="date">Today is:</h2>
      <h2>
        <strong>
          <span className="temperatureC" id="temp1">
            {Math.round(props.temperatureMax)}
          </span>
        </strong>
        /
        <span className="temperatureC" id="temp2">
          {Math.round(props.temperatureMax)}
        </span>
        <span href="#" className="tempC">
          °C
        </span>
      </h2>
      <img
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
        alt={props.description}
      />
    </div>
  );
}
