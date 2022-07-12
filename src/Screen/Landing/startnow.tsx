import React, {useReducer} from 'react';
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {dimension} from '../../Utils/test';
import welcome from '../../i18n/language';
const Startnow = ({navigation}) => {
  const onSkip = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <View>
      <ImageBackground
        style={styles.backstyle}
        source={require('../../Assets/image4.png')}>
        <View style={styles.container}>
          <Image
            source={require('../../Assets/StocksyLogo1.png')}
            style={styles.imagestyle}></Image>
          <Text style={styles.textstyle}>{welcome.title}</Text>
          <View
            style={{
              marginTop: dimension.height * 0.1,
            }}>
            <Text style={styles.descriptionstyle}>{welcome.description}</Text>
            <Text style={styles.descriptionstyle2}>{welcome.description2}</Text>
          </View>

          <TouchableOpacity style={styles.buttonstyle} onPress={() => onSkip()}>
            <Text style={styles.Buttontextstyle}>{welcome.buttontext}</Text>
          </TouchableOpacity>
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

    paddingTop: dimension.height * 0.05,
    alignSelf: 'center',
    alignItems: 'center',

    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  backstyle: {
    height: '100%',
    width: '100%',
  },
  imagestyle: {
    height: '20%',
    resizeMode: 'cover',
    width: '40%',
    marginTop: dimension.height * 0.07,
  },
  textstyle: {
    color: 'rgba(235, 194, 42, 1)',

    width: dimension.width * 0.43,
    fontSize: RFValue(30),
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    letterSpacing: 6,

    fontWeight: '600',
    textAlign: 'center',
    marginTop: dimension.height * 0.02,
  },
  descriptionstyle: {
    color: 'white',

    fontStyle: 'normal',
    fontSize: RFValue(25),
  },
  descriptionstyle2: {
    color: 'white',

    fontStyle: 'normal',
    fontSize: RFValue(25),
    marginLeft: dimension.height * 0.01,
  },
  buttonstyle: {
    width: dimension.width * 0.5,
    height: dimension.height * 0.07,
    backgroundColor: '#EBC22A',
    marginTop: dimension.height * 0.1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Buttontextstyle: {
    fontStyle: 'normal',
    fontSize: RFValue(18),
    fontWeight: '500',
    color: 'black',
  },
});

export {Startnow};
