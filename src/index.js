/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from 'navigation';

import { ApolloProvider } from '@apollo/react-hooks';
import client from './apollo/client';

const App = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  </ApolloProvider>
);

export default App;
