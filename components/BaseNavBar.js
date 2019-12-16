import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const BaseNavBar = () => {
    return (
        <View style={styles.main}>
            <View style={styles.sub}>
                <Image style={styles.navButton} source={require('./../assets/images/baseline_home_black_18dp.png')} />
                <Image style={styles.navButton} source={require('./../assets/images/baseline_favorite_border_black_18dp.png')} />
                <View style={[styles.accountAdder, styles.navButton]}>
                    <Image source={require('./../assets/images/baseline_person_add_white_18dp.png')} />
                </View>
                <Image style={styles.navButton} source={require('./../assets/images/baseline_search_black_18dp.png')} />
                <Image style={styles.navButton} source={require('./../assets/images/baseline_account_circle_black_18dp.png')} />
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
        elevation: 1,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    sub: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10
    },
    accountAdder: {
        backgroundColor: "#9932cc"
    },
    navButton: {
        borderRadius: 10,
        margin: 8,
        alignSelf: "center",
        alignContent: "center",
        height: 30,
        width: 30
    },
});