import React, {useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import ProfileCover from "./ProfileCover";
import ProfileBody from "./ProfileBody";

const Profile = () => {
    const [welcome, setWelcome] = useState("I am Smart Contacts!");

    return (
        <View>
            <ProfileCover/>
            <Text style={styles.welcome}>{welcome}</Text>
            <ProfileBody/>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});