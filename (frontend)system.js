import React from 'react';

const Weather = ({ data }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Weather: {data.weather[0].description}</p>
    </div>
  );
};

export default Weather;
