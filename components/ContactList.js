import React from 'react';
import {
    SafeAreaView, View, FlatList, StyleSheet, Image, Text, TouchableOpacity
} from 'react-native';
import Constants from 'expo-constants';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        img: 'baseline_account_circle_black_24.png',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        img: 'baseline_account_circle_black_24.png',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d71',
        img: 'baseline_account_circle_black_24.png',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        img: 'baseline_account_circle_black_24.png',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        img: 'baseline_account_circle_black_24.png',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        img: 'baseline_account_circle_black_24.png',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d75',
        img: 'baseline_account_circle_black_24.png',
        title: 'Third Item',
    },
];

const Item = ({title}) => {
    return (
        <TouchableOpacity style={styles.item}>
            <View style={styles.itemFirst}>
                <Image source={require('./../assets/images/baseline_account_circle_black_24.png')}
                        style={styles.icon}
                    />
                <Text style={styles.title}>{title}</Text>
            </View>
            <Image source={require('./../assets/images/baseline_more_vert_black_48.png')}
                        style={styles.icon}
                    />
            
        </TouchableOpacity>
    );
};

const ContactList = () => {
    return (
        <View style={styles.container}>
            {/* <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10}}>My Contacts</Text> */}

            <SafeAreaView>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => {
                    return (
                        <Item title={item.title} />
                    )
                }}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>

    );
};

export default ContactList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        // borderLeftWidth: 1,
        // borderRightWidth: 1,
        // borderColor: "#f0f1f3",
    },
    item: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: "#f0f1f3",
        // backgroundColor: '#f0f1f3',
        padding: 8,
        marginVertical: 8,
        // marginHorizontal: 5,
        borderBottomColor: "grey",
        borderBottomWidth: 0.2,
    },
    itemFirst: {
        flex: 2,
        flexDirection: "row",
    },
    title: {
        fontSize: 16,
        textAlignVertical: "center",
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 10,
    }
});