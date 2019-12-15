import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const ProfileBody = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.sub}>
                Our Profile Body
            </Text>
        </View>
    );
};

export default ProfileBody;

const styles = StyleSheet.create({
    main: {
        flex: 7,
        backgroundColor: "violet",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    sub: {
        marginTop: 30,
    }
});