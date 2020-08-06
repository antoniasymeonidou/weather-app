import React from "react";
import PropTypes from "prop-types";

const SearchForm = (props) => {
  const handleInputChange = (event) => {
    props.setSearchText(event.target.value);
  };

  return (
    <div className="search-form">
      <input
        className="input"
        data-testid="input-id"
        type="text"
        placeholder="Search for city.."
        onChange={handleInputChange}
        value={props.searchText}
      />
      <button
        className="button"
        data-testid="button-id"
        onClick={() => props.onSearch(props.searchText)}
      >
        Search
      </button>
    </div>
  );
};

SearchForm.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default SearchForm;