import React, { useReducer } from 'react';
import { useSelector } from 'react-redux';
import { Button, StyleSheet, Text, View } from 'react-native';

const LandingScreen = ({ navigation }) => {
  const data = useSelector((state) => state);
  console.log(data);
  const onSkip = () => {
    navigation.navigate("LoginScreen");
  }
  return (
    <View style={styles.container}>
      <Text style={{ color: 'red' }} >Open up a App.js to start working on your app!</Text>
      <Text>Open up a App.js to start working on your app!</Text>
      <Text>Open up a App.js to start working on your app!</Text>
      <Text>Open up a App.js to start working on your app!</Text>
      <Button
        onPress={() => onSkip()}
        title="Press Me"
      ></Button>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { LandingScreen };
