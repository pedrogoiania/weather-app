import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WeatherInformations from 'screens/weatherInformations';
import Settings from 'screens/settings';
import strings from 'utils/strings';
import colors from 'components/colors';

import Icons from 'components/icons';

const Tab = createBottomTabNavigator();

const defaultTabOptions = {
  headerShown: false,
};

const Tabbar = () => (
  <Tab.Navigator screenOptions={{
    tabBarActiveBackgroundColor: colors.bunting,
    tabBarInactiveBackgroundColor: colors.bunting,
    tabBarActiveTintColor: colors.white,
    tabBarInactiveTintColor: colors.wedgewood,
    tabBarStyle: {
      backgroundColor: colors.bunting,
    },
  }}
  >
    <Tab.Screen
      name={strings.tabbarWeatherInformationsTitle}
      component={WeatherInformations}
      options={{
        ...defaultTabOptions,
        tabBarIcon: ({ focused }) => (
          focused
            ? <Icons.LocationActive />
            : <Icons.LocationInactive />),
      }}
    />
    <Tab.Screen
      name={strings.tabbarSettingsTitle}
      component={Settings}
      options={{
        ...defaultTabOptions,
        tabBarIcon: ({ focused }) => (
          focused
            ? <Icons.SettingsActive />
            : <Icons.SettingsInactive />),
      }}
    />
  </Tab.Navigator>
);

export default Tabbar;
