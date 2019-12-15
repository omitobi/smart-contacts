import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const CoverHeader = () => {
    return (
        <View style={styles.main}>
            <View style={styles.headerPlus}>
                <Text>+</Text></View>
            <View style={styles.headerText}>
                <Text>My Profile</Text>
            </View>
            <View style={styles.headerMenu}>
                <Text>[]</Text>
            </View>
        </View>
    )
};

export default CoverHeader;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerPlus: {
        // flex: 1,
    },
    headerText: {
        textAlign: "center",
    },
    headerMenu: {
        // flex: 1,
        // flexDirection: "row-reverse"
    },
});