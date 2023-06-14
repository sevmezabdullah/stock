import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { responsiveHeight } from '../constants/responsive';

const Loader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.indicator}>
        <ActivityIndicator size={45} />
      </View>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: 20, //this amount should be equal to the header height so that any items displayed inside the container will start after the absolute positioned header
  },
  indicator: {
    alignSelf: 'center',

    alignItems: 'center',
    position: 'absolute',
    top: responsiveHeight(400),
  },
});
