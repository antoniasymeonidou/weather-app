import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "../styles/forecast-details.css";

const ForecastDetails = (props) => {
  return (
    <div className="forecast-details">
      <h3 className="detailed-date">
        {moment(props.forecast.date).format("dddd Do MMM")}
      </h3>
      <div className="detailed-temperature">
        <div className="max-temp">
          Max Temperature: {props.forecast.temperature.max}&deg;c
        </div>
        <div className="min-temp">
          Min Temperature: {props.forecast.temperature.min}&deg;c
        </div>
      </div>
      <div className="detailed-humidity">
        Humidity: {props.forecast.humidity}%
      </div>
      <div className="detailed-wind">Wind: {props.forecast.wind.speed}mph</div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.object.isRequired,
};

export default ForecastDetails;