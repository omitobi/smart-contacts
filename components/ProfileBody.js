import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import BaseNavBar from "./BaseNavBar";
import ProfileBodyMain from "./ProfileBodyMain";

const ProfileBody = () => {
    return (
        <View style={styles.main}>
            <View style={styles.sub}>
                <ProfileBodyMain/>
                <BaseNavBar/>
            </View>
        </View>
    );
};

export default ProfileBody;

const styles = StyleSheet.create({
    main: {
        flex: 10,
        backgroundColor: "white",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    sub: {
        flex: 1,
        marginTop: 30,
    }
});