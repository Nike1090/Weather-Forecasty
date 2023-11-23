import React from "react";
import moment from "moment";

const HourlyCityForecast = ({ data }) => {
  let _date = new Date();
  const weekday = data.dt * 1000;
  _date.setTime(weekday);
  
  const iconCode = data.weather[0].icon; // Icon code provided by OpenWeatherMap
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`; // Constructing the icon URL

  const fahrenheitMax = Math.round(data.main.temp_max);
  const fahrenheitMin = Math.round(data.main.temp_min);
  const fahrenheitTemp = Math.round(data.main.temp);

  return (
    <div className="row">
      <div className="col-12">
        <div className="card py-2 my-3">
          <div className="row">
            <div className="col">
              <h4 className="text-info">
                {moment(_date).format("MMMM D YYYY")}
              </h4>
              <h5>
                {data.day} at {moment(_date).format("HH:mm a")}
              </h5>
              <img src={iconUrl} alt="Weather Icon" /> {/* Displaying the weather icon */}
              <p>{data.weather[0].description}</p>
              <h5>Temperature: {fahrenheitTemp}°F</h5>
              <p>
                Minimum: {fahrenheitMin}°F and Maximum: {fahrenheitMax}°F
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyCityForecast;
