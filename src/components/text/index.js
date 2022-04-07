import React from 'react';
import { Text as RNText } from 'react-native';

import styles from './styles';

const Text = (props) => {
  const { children, style } = props;

  return (
    <RNText {...props} style={[styles.regular, style]}>
      {children}
    </RNText>
  );
};

const Light = (props) => {
  const { style } = props;

  return (
    <Text {...props} style={[styles.light, style]} />
  );
};

const Bold = (props) => {
  const { style } = props;

  return (
    <Text {...props} style={[styles.bold, style]} />
  );
};

const Black = (props) => {
  const { style } = props;

  return (
    <Text {...props} style={[styles.black, style]} />
  );
};

Text.Bold = Bold;
Text.Black = Black;
Text.Light = Light;

export default Text;
