import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CoverImage from "./CoverImage";

const CoverIntro = () => {
    return (
        <View style={styles.main}>
            <View style={styles.sub}>
                <CoverImage/>
                <View>
                    <Text style={styles.welcome}>Welcome back!</Text>
                    <Text style={styles.name}>John</Text>
                    <Text style={styles.name}>Foo Doe</Text>
                </View>
            </View>
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
        marginBottom: 20,
        textAlign: "left",
    },
    sub: {
        flex: 1,
        flexDirection: "row"
    },
    welcome: {
        fontSize: 16,
        color: "white",
        // fontWeight: "bold",
    },
    name: {
        fontSize: 35,
        color: "white",
        fontWeight: "bold",
    }
});