import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import welcome from '../../i18n/language';

const LoginScreen = ({navigation}) => {
  const onSkip = () => {
    navigation.navigate('Startnow');
  };
  return (
    <View style={styles.container}>
      <Text style={{color: 'red'}}>hello</Text>
      {/* <StatusBar style="auto" /> */}
      <Button onPress={() => onSkip()} title="Back"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {LoginScreen};
