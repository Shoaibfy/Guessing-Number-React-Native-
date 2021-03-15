import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';


const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>THE GAME IS OVER</Text>
            <Text>Number of Rounds:{props.numberOfRounds}</Text>
            <Text>the Number was gussed by Computer & it is :{props.userNumber} 🥰 </Text>
            <Button title='NEW GAME' onPress={props.onRestart} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GameOverScreen