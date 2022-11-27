import "./styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Icons from "./Icons";

export default function MainCity(props) {
  return (
    <div className="col-5 city">
      <h1 id="mainCity">{props.city}</h1>
      <h2>
        <Icons code={props.icon} size={54} />
        <div className="weatherTemperature">
          <span className="temperature">
            <strong>{Math.round(props.temperatureMax)}°</strong>
          </span>
          <span className="temperature">
            {Math.round(props.temperatureMin)}°
          </span>
        </div>
      </h2>
    </div>
  );
}
