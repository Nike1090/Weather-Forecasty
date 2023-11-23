// Hourly.js
import React, { useEffect, useState } from "react";
import moment from "moment";
import HourlyCityForecast from "./HourlyCityForecast";
import { useLocation, useParams } from "react-router-dom";

const Hourly = () => {
  const location = useLocation();
  const params = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const retrieveHourlyData = () => {
      if (location?.state?.completeData && params?.day) {
        const completeData = location.state.completeData;
        const selectedParam = params.day;

        const tempData = completeData.filter(
          (data) => moment.unix(data.dt).format("dddd") === selectedParam
        );

        setData(tempData);
        setError(null);
      } else {
        setData([]);
        setError("Missing data for hourly forecast");
      }
    };

    retrieveHourlyData();
  }, [location, params]);

  const displayHourlyData = () => {
    return data.map((value, index) => (
      <HourlyCityForecast data={value} key={index} />
    ));
  };

  return (
    <div className="container">
      <h4 className="py-3">
        {location.state?.cityName} {params.day} Report
      </h4>
      <div className="justify-content-center m-2">
        {error ? <div>Error: {error}</div> : displayHourlyData()}
      </div>
    </div>
  );
};

export default Hourly;
