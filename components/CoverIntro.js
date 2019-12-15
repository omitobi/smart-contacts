import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CoverIntro = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.welcome}>Welcome Back</Text>
            <Text style={styles.name}>John Doe</Text>
        </View>
    )
};

export default CoverIntro;

const styles = StyleSheet.create({
    main: {
        flex: 4,
        marginRight: 10,
        marginLeft: 10,
    },
    welcome: {
        fontSize: 14,
        // textAlign: "left",
        // margin: 10,
    },
    name: {
        fontSize: 24,
        // textAlign: "left",
        // margin: 5,
    }
});