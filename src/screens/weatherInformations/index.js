import React, { useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';

import { useLazyQuery } from '@apollo/react-hooks';

import Text from 'components/text';
import geolocation from 'utils/geolocation';

import Weather from 'models/Weather';
import Icons from 'components/icons';
import { GET_WEATHER_BY_GEOLOCATION } from './index.graphql';

import styles from './styles';

const weatherIconEnum = {
  clearSky: <Icons.Clear />,
  clearSkyNight: <Icons.ClearNight />,
  fewClouds: <Icons.CloudyClear />,
  fewCloudsNight: <Icons.CloudyClearNight />,
  scatteredClouds: <Icons.Cloudy />,
  scatteredCloudsNight: <Icons.CloudyClearNight />,
};

const WeatherInformations = () => {
  const [coords, setCoords] = useState(null);

  const [loadWeather, { called, loading, data }] = useLazyQuery(
    GET_WEATHER_BY_GEOLOCATION,
    {
      variables: {
        coordinates: {
          lat: coords?.latitude,
          lon: coords?.longitude,
        },
      },
    },
  );

  const getCurrentLocation = async () => {
    try {
      const geolocationData = await geolocation.getCurrentLocation();
      setCoords(geolocationData.coords);
    } catch (e) {
      geolocation.requestAuthorization();
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (coords) {
      loadWeather();
    }
  }, [coords]);

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text.Bold style={styles.text}>
          Carregando as informações...
        </Text.Bold>
      </SafeAreaView>
    );
  }

  if (called && data) {
    const weather = Weather(data.getWeatherByGeoLocation);
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.locationContainer}>
          <Text.Bold style={styles.locationText}>
            {weather.location}
          </Text.Bold>
        </View>
        <View style={styles.temperatureContainer}>
          <View style={styles.temperatureIcon}>
            {weatherIconEnum[weather.icon]}
          </View>
          <View style={styles.temperatureTextContainer}>
            <Text style={styles.temperatureText}>
              {`${weather.temp} °C`}
            </Text>
          </View>
        </View>

        <View style={styles.tempsWidgetsContainer}>
          <View style={styles.tempsContainer}>
            <Text.Bold style={styles.temps}>
              Máxima:
            </Text.Bold>
            <Text.Light style={styles.temps}>
              {`${weather.tempMax} °C`}
            </Text.Light>
          </View>

          <View style={styles.tempsContainer}>
            <Text.Bold style={styles.temps}>
              Mínima:
            </Text.Bold>
            <Text.Light style={styles.temps}>
              {`${weather.tempMin} °C`}
            </Text.Light>
          </View>

          <View style={styles.tempsContainer}>
            <Text.Bold style={styles.temps}>
              Sensação:
            </Text.Bold>
            <Text.Light style={styles.temps}>
              {`${weather.feelsLike} °C`}
            </Text.Light>
          </View>

        </View>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <Text.Bold style={styles.text}>
        Oooops...
      </Text.Bold>
    </View>
  );
};

export default WeatherInformations;
