const Weather = (weatherData) => {
  const { main } = weatherData;
  const { description } = weatherData;
  const { temp } = weatherData;
  const { feelsLike } = weatherData;
  const { tempMin } = weatherData;
  const { tempMax } = weatherData;
  const { location } = weatherData;

  return {
    main,
    description,
    temp,
    feelsLike,
    tempMin,
    tempMax,
    location,
  };
};

export default Weather;
