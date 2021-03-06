import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {dimension} from '../../Utils/test';
import Button from '../../Components/button/button';
import Image1 from '../../Components/image';
import welcome from '../../i18n/language';
const Startnow = ({navigation}) => {
  const onSkip = () => {
    navigation.navigate('RegisterScreen');
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
          <View
            style={{
              marginTop: dimension.height * 0.09,
            }}>
            <Text style={styles.descriptionstyle}>{welcome.description}</Text>
            <Text style={styles.descriptionstyle2}>{welcome.description2}</Text>
          </View>
          <View style={styles.buttonview}>
            <Button text={welcome.buttontext} onPress={onSkip} />
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

  textstyle: {
    color: '#CDB562',
    fontSize: RFValue(32),
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    letterSpacing: 9,
    fontWeight: '800',
    textAlign: 'center',
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
  buttonview: {
    height: dimension.height * 0.1,
    width: dimension.width * 0.1,
    marginTop: dimension.height * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textviewstyle: {
    height: dimension.height * 0.07,
    width: dimension.width * 0.6,
    marginTop: dimension.height * 0.03,
  },
});

export {Startnow};
