import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const CoverImage = () => {
    return (
        <View style={styles.main}>
            <Image source={require('./../assets/images/omitobisam.jpg')}
                   style={[styles.img, {width: 100, height: 110}]}
            />
        </View>
    )
};

export default CoverImage;

const styles = StyleSheet.create({
    main: {
        flexDirection: "column",
        marginRight: 10,
        marginLeft: 10,
    },
    img: {
        borderWidth: 4,
        borderColor: "white",
        borderRadius: 10,
    }
});