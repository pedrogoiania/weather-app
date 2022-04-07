import React, { useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';

import { useLazyQuery } from '@apollo/react-hooks';

import Text from 'components/text';
import geolocation from 'utils/geolocation';

import Weather from 'models/Weather';
import { GET_WEATHER_BY_GEOLOCATION } from './index.graphql';

import styles from './styles';

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
    console.log(data);
    const weather = Weather(data.getWeatherByGeoLocation);

    console.log(weather);

    return (
      <SafeAreaView style={styles.container}>
        <View style={{ alignItems: 'center', marginTop: 50 }}>
          <Text.Bold style={styles.text}>
            {weather.location}
          </Text.Bold>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 50 }}>

          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={styles.temps}>
              {`temp: \n${weather.temp}`}
            </Text>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={styles.temps}>
              {`tempMax: \n${weather.tempMax}`}
            </Text>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={styles.temps}>
              {`tempMin: \n${weather.tempMin}`}
            </Text>
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
