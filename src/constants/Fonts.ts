import {Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 375;
const nBaselineHeight = 812;

export function normalize(size: number) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export function normalizeNew(size: number) {
  const verticalScale = (SCREEN_HEIGHT / nBaselineHeight) * size;
  return Math.round(PixelRatio.roundToNearestPixel(verticalScale));
}
export default {
  POPPINS_R: 'Poppins-Regular',
  POPPINS_B: 'Poppins-Bold',
  POPPINS_M: 'Poppins-Medium',
  POPPINS_I: 'Poppins-Italic',
  POPPINS_SB: 'Poppins-SemiBold',
  POPPINS_L: 'Poppins-Light',
  SATOSHI_BLACK: 'Satoshi-Black',
  SATOSHI_BOLD: 'Satoshi-Bold',
  SATOSHI_M: 'Satoshi-Medium',
  SATOSHI_R: 'Satoshi-Regular',
  fontSize: normalize,
  n: normalize,
  nn: normalizeNew,
};
