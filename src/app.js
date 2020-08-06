import React, { useState, useEffect } from "react";
import axios from "axios";
import LocationDetails from "./components/location-details";
import ForecastSummaries from "./components/forecast-summaries";
import ForecastDetails from "./components/forecast-details";
import SearchForm from "./components/search-form";
import "./styles/app.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const App = () => {
  const [forecasts, setForecasts] = useState([]);

  const [location, setLocation] = useState({
    city: "",
    country: "",
  });

  const [selectedDate, setSelectedDate] = useState("");

  const [searchText, setSearchText] = useState("");

  const [load, setLoad] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const { city, country } = location;

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
    setIsOpen(openModal);
  };

  useEffect(() => {
    axios
      .get("https://mcr-codes-weather.herokuapp.com/forecast/")
      .then((response) => {
        setForecasts(response.data.forecasts);
        setLocation(response.data.location);
        setLoad(true);
      })
      .catch((err) => {
        alert("Server error.");
        setLoad(true);
      });
  }, []);

  const findCity = () => {
    axios
      .get(
        `https://mcr-codes-weather.herokuapp.com/forecast?city=${searchText}`
      )
      .then((response) => {
        setForecasts(response.data.forecasts);
        setLocation(response.data.location);
        setLoad(true);
      })
      .catch((err) => {
        alert("The city could not be found.");
        setLoad(true);
      });
  };

  if (load) {
    return (
      <div className="forecast">
        <LocationDetails city={city} country={country} />
        <SearchForm
          onSearch={findCity}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <ForecastSummaries
          forecasts={forecasts}
          onForecastSelect={handleForecastSelect}
        />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
        </Modal>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default App;
