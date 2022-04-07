import React, { useEffect, useState } from 'react';

import { View } from 'react-native';

import Text from 'components/text';

import geolocation from 'utils/geolocation';

import styles from './styles';

const WeatherInformations = () => {
  const [coords, setCoords] = useState(null);

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
      console.log(coords);
    }
  }, [coords]);

  return (
    <View style={styles.container}>
      <Text.Bold style={styles.text}>
        Weather Informations
      </Text.Bold>
    </View>
  );
};

export default WeatherInformations;
