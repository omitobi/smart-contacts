import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BaseNavBar = () => {
    return (
        <View style={styles.main}>
            <View style={styles.sub}>
                <Text>Home</Text>
                <Text>About</Text>
                <Text>New</Text>
                <Text>Search</Text>
                <Text>Profile</Text>
            </View>
        </View>
    )
};

export default BaseNavBar;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: "column",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        elevation:4,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        borderColor: "grey",
        borderWidth: 3
    },
    sub: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10
    }
});