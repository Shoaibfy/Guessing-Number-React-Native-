import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Card from '../components/Cards';
import Input from '../components/input';
import Colors from '../constants/colors'
import NumberContainer from '../NumberContainer';

const StartGameScreens = (props) => {
    const [enteredValue, setEnteredvalue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState()


    const numberInputHandler = (inputText) => {
        setEnteredvalue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredvalue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const choosenNumber = parseInt(enteredValue)
        if (isNaN(choosenNumber) || choosenNumber === 0 || choosenNumber >= 99) {
            Alert.alert('Invalid Number !', "Number should be in between 1 and 99", [{ text: 'Okey', style: 'destructive', onPress: resetInputHandler }])
            return;
        } else {
            setConfirmed(true);
            setSelectedNumber(parseInt(choosenNumber));
            setEnteredvalue('');
        }
    }

    let confirmedOutput;
    if (confirmed) {
        confirmedOutput =
            <Card style={styles.summaryContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputNumber}>Your Selected Number :</Text>
                    <Text style={styles.inputNumber2}> {selectedNumber} </Text>
                    <Button title='START GAME !' onPress={() => props.onStartGame(selectedNumber)} />
                </View>
            </Card>
    }

    return (
        // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
        <View style={styles.screen}>
            <Text style={styles.title} > Let's Start a New Game ! </Text>
            <Card>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputNumber} >
                        select a number
                     </Text>
                    <Input style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer} >
                        <View style={styles.button}>
                            <Button title='Reset' color={Colors.primary} onPress={resetInputHandler} />
                        </View>
                        <View>
                            <Button title='Confirm' color='green' onPress={confirmInputHandler} />
                        </View>

                    </View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        // </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        marginLeft: 30

    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        marginRight: 50
    },
    button: {
        width: 100,
        marginRight: 20

    },
    inputNumber: {
        marginBottom: 30
    },
    inputNumber2: {
        paddingBottom: 15,
        borderColor: Colors.accent,
        borderRadius: 15,
        borderWidth: 1,
        paddingTop: 5,
        backgroundColor: 'green',
        color: 'white',
        fontFamily: 'bold',
        marginBottom: 25
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginTop: 10
    },
    input: {
        marginBottom: 10,
        width: 50
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    summaryContainer: {
        marginTop: 10,
        alignItems: 'center'
    }
})

export default StartGameScreens;