import { StyleSheet } from 'react-native';

import colors from 'components/colors';
import fontSize from 'components/sizes';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    flex: 1,
  },
  loadingContainer: {
    alignItems: 'center',
    backgroundColor: colors.dark,
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontSize: fontSize.xLarge,
  },
  temps: {
    color: colors.white,
    fontSize: fontSize.small,
  },
});
