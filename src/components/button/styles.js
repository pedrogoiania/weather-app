import colors from 'components/colors';
import fontSize from 'components/sizes';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 84,
    backgroundColor: colors.bunting,
    paddingHorizontal: 60,
    borderRadius: 20,
  },
  text: {
    fontSize: fontSize.large,
    color: colors.white,
  },
});
