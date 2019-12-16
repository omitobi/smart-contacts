import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CoverIntro = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.welcome}>Welcome Back!</Text>
            <Text style={styles.name}>Debra</Text>
            <Text style={styles.name}>Rosenblatt</Text>
        </View>
    )
};

export default CoverIntro;

const styles = StyleSheet.create({
    main: {
        flex: 4,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 20,
        textAlign: "left",
    },
    welcome: {
        fontSize: 16,
        color: "white",
        // fontWeight: "bold",
    },
    name: {
        fontSize: 40,
        color: "white",
        fontWeight: "bold",
    }
});