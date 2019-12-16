import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CoverHeader from "./CoverHeader";
import CoverIntro from "./CoverIntro";
import CoverImage from "./CoverImage";

const ProfileCover = () => {
    return (
        <View style={styles.main}>
            <View style={styles.sub}>
                <CoverHeader/>
                <CoverIntro/>
            </View>
        </View>
    );
};

export default ProfileCover;

const styles = StyleSheet.create({
    main: {
        flex: 5,
        flexDirection: "column",
    },
    sub: {
        flex: 1,
    }
});