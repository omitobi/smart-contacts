import React from "react";
import {StyleSheet, View, Text} from "react-native";
import ContactList from "./ContactList";

const ProfileBodyMain = () => {
    return (
        <View style={styles.main}>
            <View style={styles.sub}>
                <View style={styles.stats}>
                    <View style={styles.statItem}>
                        <Text style={{fontWeight: "bold", fontSize: 22}}>76</Text>
                        <Text style={{ fontSize: 12, color: "grey", opacity: 0.5}}>Contacts</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={{fontWeight: "bold", fontSize: 22}}>76</Text>
                        <Text style={{ fontSize: 12, color: "grey", opacity: 0.5}}>Favourites</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={{fontWeight: "bold", fontSize: 22}}>76</Text>
                        <Text style={{ fontSize: 12, color: "grey", opacity: 0.5}}>Recent</Text>
                    </View>
                </View>
                <View style={styles.list}>
                    <ContactList />
                </View>
            </View>
        </View>
    )
};

export default ProfileBodyMain;

const styles = StyleSheet.create({
    main: {
        flex: 6,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginLeft: 20,
        marginRight: 20,
    },
    sub: {
        flex: 1,
        marginTop: 30,
    },
    stats: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    statItem: {
        padding: 10,
        width: 80,
        height: 80,
        alignItems: "center",
        borderRadius: 15,
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    list: {
        flex: 4,
    }
});