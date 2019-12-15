import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CoverImage = () => {
    return (
        <View style={styles.main}>
            <Text>Image</Text>
        </View>
    )
};

export default CoverImage;

const styles = StyleSheet.create({
    main: {
        flex: 4,
        flexDirection: "column",
        backgroundColor: "steelblue",
    },
});