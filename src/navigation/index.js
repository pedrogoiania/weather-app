import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WeatherInformations from 'screens/weatherInformations';

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Weather Information" component={WeatherInformations} />
  </Stack.Navigator>
);

export default StackNavigator;
