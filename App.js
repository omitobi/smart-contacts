import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, Text, View } from 'react-native';
import Profile from "./components/Profile";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Profile/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
  }
});
