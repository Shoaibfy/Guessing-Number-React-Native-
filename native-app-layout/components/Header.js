import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {

    return (
        <View style={styles.header} >
            <Text>
                {props.title}
            </Text>
            <Text style={styles.createrName}> ~ Created by Shoaib Ahmed</Text>
        </View>
    )

};



const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center'

    },
    headerTitle: {
        color: 'black',
        fontSize: 18
    },
    createrName: {
        color: 'skyblue',
        marginLeft: 400

    }
})
export default Header;