import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';
import Constants from 'expo-constants';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d71',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d75',
        title: 'Third Item',
    },
];

const Item = ({title}) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const ContactList = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10}}>My Contacts</Text>
            <SafeAreaView>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <Item title={item.title}/>}
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
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "#f0f1f3",
    },
    item: {
        backgroundColor: "#f0f1f3",
        // backgroundColor: '#f0f1f3',
        padding: 8,
        marginVertical: 8,
        marginHorizontal: 5,
        elevation: 1,
        shadowOffset: {width: 0, height: 2},
        shadowColor: "#f0f1f3",
        shadowOpacity: 10,
        shadowRadius: 10,
    },
    title: {
        fontSize: 16,
    },
});