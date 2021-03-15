import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreens from './screens/StartGameScreens';

export default function App() {

  const [userNumber, setUsernumber] = useState();
  const [guessRounds, setguessRounds] = useState(0);

  const configureNeGame = () => {
    setguessRounds(0);
    setUsernumber(null)
  }


  const startGameHandler = (selectedNumber) => {
    setUsernumber(selectedNumber);

  }

  const gameOverHandler = (numberOfRounds) => {
    setguessRounds(numberOfRounds);

  }

  let content = <StartGameScreens onStartGame={startGameHandler} onGameOver={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} />;
  } else if (guessRounds > 0) {
    content = <GameOverScreen numberOfRounds={guessRounds} userNumber={userNumber} onRestart={configureNeGame} />
  }

  return (
    <View style={styles.screen}>
      <Header title={`MEMORY GAME FOR COMPUTER`} />
      {content}

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,

  },
});
