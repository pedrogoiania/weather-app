/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView, ScrollView, StatusBar, Text, View,
} from 'react-native';

const App = () => (
  <SafeAreaView>
    <StatusBar />
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Text>App</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default App;
