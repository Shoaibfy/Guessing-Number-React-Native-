import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Input = (props) => {
    return (
        <TextInput  {...props} style={styles.input} placeholder='enter Number' />

    );
}

const styles = StyleSheet.create({
    input: {
        height: 25,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10,
        textAlign: 'center',
        alignContent: 'center',
        width: 85


    }
})

export default Input;