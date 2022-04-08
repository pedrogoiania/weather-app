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
  loadingContainer: {
    alignItems: 'center',
    backgroundColor: colors.dark,
    flex: 1,
    justifyContent: 'center',
  },
  locationContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  locationText: {
    color: colors.white,
    fontSize: fontSize.xLarge,
  },
  text: {
    color: colors.white,
    fontSize: fontSize.xLarge,
  },
  temperatureText: {
    color: colors.white,
    fontSize: fontSize.big,
  },
  tempsWidgetsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
  tempsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  temps: {
    color: colors.white,
    fontSize: fontSize.small,
  },
  temperatureContainer: {
    paddingVertical: 50,
  },
  temperatureIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperatureTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: { marginBottom: 50 },
});
