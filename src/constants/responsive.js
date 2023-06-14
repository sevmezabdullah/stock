import { Dimensions } from 'react-native';
const heightMobileUI = 896;
const widthMobileUI = 414;
export const responsiveWidth = (width) => {
  return (Dimensions.get('window').width * width) / widthMobileUI;
};

export const responsiveHeight = (height) => {
  return (Dimensions.get('window').height * height) / heightMobileUI;
};
