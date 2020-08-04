import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";
import '../styles/forecast-summary.css';

const ForecastSummary = (props) => {
  return (
    <div className="forecast-summary">
      <div className="date" data-testid="date-id">
        {moment(props.date).format("dddd Do MMM")}       
      </div>
      <div className="icon" data-testid="icon-id">
        <WeatherIcon name="owm" iconId={props.icon} />
      </div>
      <div className="temperature" data-testid="temperature-id">
        {props.temperature}&deg;c
      </div>
      <div className="description" data-testid="description-id">
        {props.description}
      </div>
      <button onClick={() => props.onSelect(props.date)}>More details</button>
    </div>
  );
};

ForecastSummary.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    onSelect: PropTypes.func,
  }),
};

export default ForecastSummary;