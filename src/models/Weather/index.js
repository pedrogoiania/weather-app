const Weather = (weatherData) => {
  const { main } = weatherData;
  const { description } = weatherData;
  const { temp } = weatherData;
  const { feelsLike } = weatherData;
  const { tempMin } = weatherData;
  const { tempMax } = weatherData;
  const { location } = weatherData;
  const { icon } = weatherData;

  return {
    main,
    description,
    temp,
    feelsLike,
    tempMin,
    tempMax,
    location,
    icon,
  };
};

export default Weather;
