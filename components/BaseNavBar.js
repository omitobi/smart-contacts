import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const BaseNavBar = () => {
    return (
        <View style={styles.main}>
            <View style={styles.sub}>
                <TouchableOpacity>
                    <Image style={styles.navButton}
                           source={require('./../assets/images/baseline_home_black_18dp.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.navButton}
                           source={require('./../assets/images/baseline_favorite_border_black_18dp.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    console.log('Of course')
                }}>
                    <View style={[styles.accountAdder, styles.navButton]}>
                        <Image style={{width: 30, height: 30}}
                               source={require('./../assets/images/baseline_person_add_white_18dp.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.navButton}
                           source={require('./../assets/images/baseline_search_black_18dp.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./../assets/images/omitobisam.jpg')}
                           style={[styles.navButton, {width: 30, height: 30}]}/>
                </TouchableOpacity>
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
        elevation: 5,
        shadowOffset: {width: 0, height: 2},
        shadowColor: "grey",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: "white",
        marginHorizontal: 2,
        // marginVertical: 2
    },
    sub: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
        // marginBottom: 10,
        marginTop: 10,
    },
    accountAdder: {
        backgroundColor: "#9932cc",
    },
    navButton: {
        borderRadius: 20,
        margin: 8,
        alignSelf: "center",
        alignContent: "center",
        height: 30,
        width: 30
    },
});