import React from 'react';
import {StyleSheet, Text, View, Image} from "react-native";

const CoverHeader = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.headerTextFirst}>
                SMART
            </Text>
            <Text style={styles.headerTextSecond}>
                Contacts
            </Text>
        </View>
    )
};

export default CoverHeader;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginRight: 10,
        marginLeft: 10,
        // minHeight: 22,
        marginTop: 6,
        borderBottomWidth: 0.17,
        borderBottomColor: "grey",
    },
    headerPlus: {
        // flex: 1,
    },
    headerTextFirst: {
        // fontWeight: "bold",
        textAlign: "center",
        fontSize: 15,
        color: "white",
        fontWeight: "bold",
    },
    headerTextSecond: {
        textAlign: "center",
        fontSize: 15,
        color: "white",
    },
    headerMenu: {
        // flex: 1,
        // flexDirection: "row-reverse"
    },
});