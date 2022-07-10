import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const LoginScreen = ({navigation}) => {
  const onSkip = () => {
    navigation.navigate("LandingScreen");
  }
  return (
    <View style={styles.container}>
      <Text style={{color: 'red'}} >Open up a App.js to start working on your app!</Text>
      {/* <StatusBar style="auto" /> */}
      <Button
        onPress={() => onSkip()}
        title="Back"
      ></Button>
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

export { LoginScreen };
