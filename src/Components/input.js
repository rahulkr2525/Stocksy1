import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {dimension} from '../Utils/test';
const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardtype,
}) => {
  const {inputStyle, labelStyle, containerStyle} = styles;
  return (
    <View style={styles.containerStyle}>
      <TextInput
        style={styles.inputStyle}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardtype}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputStyle: {
    height: dimension.height * 0.07,
    width: dimension.width * 0.7,
    backgroundColor: 'white',
    padding: dimension.height * 0.01,
    borderRadius: 40,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Input;
