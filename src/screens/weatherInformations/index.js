import React, { useEffect } from 'react';

import { View } from 'react-native';

import Text from 'components/text';

import geolocation from 'utils/geolocation';

import styles from './styles';

const WeatherInformations = () => {
  const getCurrentLocation = async () => {
    try {
      const geolocationData = await geolocation.getCurrentLocation();
      console.log('geolocationData: ', geolocationData);
    } catch (e) {
      geolocation.requestAuthorization();
      console.log('error: ', e);
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <View style={styles.container}>
      <Text.Bold style={styles.text}>
        Weather Informations
      </Text.Bold>
    </View>
  );
};

export default WeatherInformations;
