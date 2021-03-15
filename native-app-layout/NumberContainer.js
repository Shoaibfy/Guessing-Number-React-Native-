import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from './constants/colors';

const NumberContainer = (props) => {
    return (
        <View style={styles.container} >
            <Text style={styles.numbers}> {props.children} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent,
        marginVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numbers: {
        color: Colors.accent,
        fontSize: 22
    }
})

export default NumberContainer;