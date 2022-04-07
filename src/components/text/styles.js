import { StyleSheet } from 'react-native';

import fonts from 'components/fonts';

const styles = StyleSheet.create({
  regular: {
    fontFamily: fonts.robotoSlab.regular,
    letterSpacing: 1,
  },
  light: {
    fontFamily: fonts.robotoSlab.light,
  },
  bold: {
    fontFamily: fonts.robotoSlab.bold,
  },
  black: {
    fontFamily: fonts.robotoSlab.black,
  },
});

export default styles;
