import React from 'react';
import PropTypes from 'prop-types';

const LocationDetails = props => (
  <h1 className="locationDetails">
    {props.city},
    {props.country}
  </h1>
);

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;