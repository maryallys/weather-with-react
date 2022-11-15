import "./styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import FormatedDate from "./FormatedDate";

export default function Details(props) {
  return (
    <div className="col-5 details">
      <h3 className="date">
        <FormatedDate date={props.date} />
      </h3>
      <ul className="humidity">
        <li>
          Humidity: <span id="humidity">{props.humidity}</span>%{" "}
        </li>
        <li>
          Wind: <span id="wind">{props.wind}</span> km/h
        </li>
        <li>
          <span id="typeW" className="text-capitalize">
            {props.description}
          </span>
        </li>
      </ul>
    </div>
  );
}
