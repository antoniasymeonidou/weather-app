import React from 'react';
import PropTypes from 'prop-types';

const App = props => <h1>{`Hello ${props.location.city}!`}</h1>;

App.propTypes = {
  name: PropTypes.string,
  location: PropTypes.object,
};

App.defaultProps = {
  name: 'Antonia',
};



export default App;
