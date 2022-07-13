import React from 'react';
import {StyleSheet, Text, View, ImageBackground, TextInput} from 'react-native';
import Input from '../../Components/input';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {dimension} from '../../Utils/test';
import Image1 from '../../Components/image';
import welcome from '../../i18n/language';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button1 from '../../Components/button/buttonregister';
const RegisterScreen = ({navigation}) => {
  const onSkip = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <View>
      <ImageBackground
        style={styles.backstyle}
        source={require('../../Assets/background/image4.png')}>
        <View style={styles.container}>
          <Image1 />
          <View style={styles.textviewstyle}>
            <Text style={styles.textstyle}>{welcome.title}</Text>
          </View>
          <View style={styles.textinputview}>
            <Icon name="phone" size={25} color="rgba(0, 0, 0, 1)" />
            <Input placeholder="Mobile" keyboardtype="numeric" />
          </View>
          <View style={styles.buttonview}>
            <Button1 text={welcome.buttonotp} onPress={onSkip} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: dimension.height,
    width: dimension.width,
    backgroundColor: 'rgba(3, 3, 5, 0.75)',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  backstyle: {
    height: '100%',
    width: '100%',
  },
  textstyle: {
    color: '#CDB562',
    fontSize: RFValue(32),
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    letterSpacing: 9,
    fontWeight: '800',
    textAlign: 'center',
  },
  textinputview: {
    backgroundColor: 'white',
    paddingLeft: 15,
    height: dimension.height * 0.07,
    width: dimension.width * 0.8,
    borderRadius: 100,
    alignItems: 'center',
    marginTop: dimension.height * 0.1,
    flexDirection: 'row',
  },
  buttonview: {
    height: dimension.height * 0.1,
    width: dimension.width * 0.5,
    marginTop: dimension.height * 0.12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textviewstyle: {
    height: dimension.height * 0.07,
    width: dimension.width * 0.6,
    marginTop: dimension.height * 0.03,
  },
});

export {RegisterScreen};
