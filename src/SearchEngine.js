import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  //let [temperature, setTemperature] = useStates();
  let [city, setCity] = useState();
  let [temperature, setTemperature] = useState();
  let [description, setDescription] = useState();
  let [humidity, setHumidity] = useState();
  let [windSpeed, setWindSpeed] = useState();
  let [icon, setIcon] = useState();

  function updateWeather(response) {
    console.log(response.data.weather[0].icon);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWindSpeed(Math.round(response.data.wind.speed));
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `e011509df1b670bc25a4f046983a086b`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(updateWeather);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (temperature) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={updateCity} />
          <input type="submit" />
        </form>
        <ul>
          <li>Temperature: {temperature} C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind Speed: {windSpeed} mi/hr </li>
          <li>
            <img src={icon} alt="weather icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={updateCity} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
