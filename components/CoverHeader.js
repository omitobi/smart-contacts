import React from 'react';
import {StyleSheet, Text, View, Image} from "react-native";

const CoverHeader = () => {
    return (
        <View style={styles.main}>
            <View style={styles.headerPlus}>
                <Image source={require('./../assets/images/baseline_post_add_white_18dp.png')} />
            </View>
            <Text style={styles.headerText}>
                My Profile
            </Text>
            <View style={styles.headerMenu}>
                <Image source={require('./../assets/images/baseline_post_add_white_18dp.png')} />
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
        marginRight: 10,
        marginLeft: 10,
    },
    headerPlus: {
        // flex: 1,
    },
    headerText: {
        textAlign: "center",
        fontSize: 16,
        color: "white"
    },
    headerMenu: {
        // flex: 1,
        // flexDirection: "row-reverse"
    },
});