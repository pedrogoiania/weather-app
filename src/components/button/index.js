import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import Text from 'components/text';

import styles from './styles';

const Button = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Text style={styles.text}>
        {title}
      </Text>
    </View>
  </TouchableOpacity>
);

export default Button;
