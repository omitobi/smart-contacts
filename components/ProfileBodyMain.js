import React from "react";
import {StyleSheet, View, Text} from "react-native";

const ProfileBodyMain = () => {
    return (
        <View style={styles.main}>
            <Text>
                Our Profile Body
            </Text>
        </View>
    )
};

export default ProfileBodyMain;

const styles = StyleSheet.create({
    main: {
        flex:6,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    sub: {
        flex: 1,
        marginTop: 30,
    }
});