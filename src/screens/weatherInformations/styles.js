import { StyleSheet } from 'react-native';

import colors from 'components/colors';
import fontSize from 'components/sizes';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: fontSize.xLarge,
  },
});
