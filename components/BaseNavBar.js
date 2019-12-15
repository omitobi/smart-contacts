import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BaseNavBar = () => {
  return (
      <View style={styles.main}>
          <Text>Home|About|New|Search|Profile</Text>
      </View>
  )
};

export default BaseNavBar;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "green",
        marginRight: 10,
        marginLeft: 10,
    }
});