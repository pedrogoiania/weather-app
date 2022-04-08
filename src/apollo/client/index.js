/* eslint-disable no-undef */
import { Platform } from 'react-native';
import ApolloClient from 'apollo-boost';

const devUrls = {
  android: '10.0.2.2:5000',
  ios: 'localhost:5000',
};

const getUrl = () => {
  if (__DEV__) {
    return devUrls[Platform.OS] || 'localhost:5000';
  }

  return 'localhost:5000';
};

const client = new ApolloClient({
  uri: `http://${getUrl()}/graphql`,
});

export default client;
