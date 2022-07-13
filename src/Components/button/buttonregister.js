import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {dimension} from '../../Utils/test';

const Button1 = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btnContainerStyle}>
        <Text style={styles.btnTextStyle}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainerStyle: {
    width: dimension.width * 0.4,
    height: dimension.height * 0.06,
    backgroundColor: '#F3B125',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    fontStyle: 'normal',
    fontSize: RFValue(18),
    fontWeight: '500',
    color: 'black',
  },
});

export default Button1;
