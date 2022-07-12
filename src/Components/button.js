import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {dimension} from '../Utils/test';

const width = Dimensions.get('window').width;

const Button = ({text, onPress}) => {
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
    width: dimension.width * 0.5,
    height: dimension.height * 0.07,
    backgroundColor: '#EBC22A',
    marginTop: dimension.height * 0.06,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    fontStyle: 'normal',
    fontSize: RFValue(18),
    fontWeight: '500',
    color: 'black',
  },
  imagestyle: {
    height: '20%',
    resizeMode: 'cover',
    width: '40%',
    marginTop: dimension.height * 0.03,
  },
});

export default Button;
