import "./styles.css";
import React from "react";

export default function Details(props) {
  return (
    <div className="col-5 details">
      <ul className="humidity">
        <li>
          Humidity: <span id="humidity">{props.humidity}</span>%{" "}
        </li>
        <li>
          Wind: <span id="wind">{props.wind}</span> km/h
        </li>
        <li>
          <span id="typeW">{props.description}</span>
        </li>
      </ul>
    </div>
  );
}
