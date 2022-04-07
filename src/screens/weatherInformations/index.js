import React, { useEffect } from 'react';

import {
  View, Text,
} from 'react-native';

import geolocation from 'utils/geolocation';

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
    <View>
      <Text>Weather Informations</Text>
    </View>
  );
};

export default WeatherInformations;
