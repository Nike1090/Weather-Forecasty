import React from "react";
import "./App.css";
import WeatherContainer from "./WeatherContainer";
import Hourly from "./Hourly";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<WeatherContainer />} />
            <Route path="/hourWiseForecast/:day" element={<Hourly />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
