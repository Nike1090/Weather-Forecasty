import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const WeatherData = ({ reading, completeData, cityName }) => {
  const navigate = useNavigate();

  let _date = new Date();
  const weekday = reading.dt * 1000;
  _date.setTime(weekday);

  const iconCode = reading.weather[0].icon; // Icon code provided by OpenWeatherMap
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`; // Constructing the icon URL

  const fahrenheitMax = reading.main.temp_max;
  const fahrenheitMin = reading.main.temp_min;
  const farenheitTemp = reading.main.temp;

  const handleLinkClick = () => {
    navigate(`/hourWiseForecast/${reading.day}`, {
      state: {
        completeData,
        cityName,
      },
    });
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="card py-2 mt-3">
          <div className="row">
            <div className="col">
              <h4 className="text-info">{moment(_date).format("MMMM D YYYY")}</h4>
              <h5>{reading.day}</h5>
              <img src={iconUrl} alt="Weather Icon" /> {/* Displaying the weather icon */}
              <p>{reading.weather[0].description}</p>
              <h5>Temperature: {farenheitTemp}°F</h5>
              <p>
                Minimum: {fahrenheitMin}°F and Maximum: {fahrenheitMax}°F
              </p>
              <button onClick={handleLinkClick} className="btn btn-link">
                View Hourly Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
