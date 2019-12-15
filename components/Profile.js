import React, {useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import ProfileCover from "./ProfileCover";
import ProfileBody from "./ProfileBody";
import BaseNavBar from "./BaseNavBar";

const Profile = () => {
    const [welcome, setWelcome] = useState("I am Smart Contacts!");

    return (
        <View style={styles.main}>
            <ProfileCover/>
            <ProfileBody/>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    main: {
        // flex: 1,
        // flexDirection: "row",
        // justifyContent: "center",
        // alignItems: "stretch",
        flex: 1,
        flexDirection: "column",
        justifyContent: 'space-evenly',
        backgroundColor: "steelblue",
    }
});