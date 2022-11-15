import "./styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Icons from "./Icons";
import WeatherConverter from "./WeatherConverter";

export default function MainCity(props) {
  return (
    <div className="col-5 city">
      <h1 id="mainCity">{props.city}</h1>
      <h2>
        <Icons code={props.icon} />
        <strong>
          <WeatherConverter celsius={props.temperatureMax} />
        </strong>
        <WeatherConverter celsius={props.temperatureMin} />
      </h2>
    </div>
  );
}
