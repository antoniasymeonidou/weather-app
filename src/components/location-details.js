import React from 'react';
import PropTypes from 'prop-types';
import "../styles/location-details.css";

const LocationDetails = props => (
  <h1 className="location-details">
    {props.city}, {props.country}
  </h1>
);

LocationDetails.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
};

export default LocationDetails;