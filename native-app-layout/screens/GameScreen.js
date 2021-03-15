import React, { useState, useRef, useEffect } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Cards';
import NumberContainer from '../NumberContainer';

const generateRandomBetween = (max, min, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(max, min, exclude)
    } else {
        return rndNum
    }
}


const GameScreen = props => {

    const [currentGuess, setGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
    const [rounds, setRounds] = useState(0)
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = { props }

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds)
        }
    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('enter Number', [{ text: 'sorry', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setGuess(nextNumber)
        setRounds(currentRounds => currentRounds + 1)
    }

    return (
        <View style={styles.screen}>
            <Text> Computer Guess</Text>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='Lower' onPress={() => { nextGuessHandler('lower') }} />
                <Button title='Greater' onPress={() => { nextGuessHandler('greater') }} />
            </Card>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default GameScreen;