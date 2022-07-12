import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {dimension} from '../Utils/test';

const width = Dimensions.get('window').width;

const Image1 = () => {
  return (
    <Image
      source={require('../Assets/logo/StocksyLogo1.png')}
      style={styles.imagestyle}></Image>
  );
};

const styles = StyleSheet.create({
  imagestyle: {
    height: '20%',
    resizeMode: 'cover',
    width: '40%',
    marginTop: dimension.height * 0.03,
  },
});

export default Image1;
