import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import React, { useState } from 'react'

export default function App() {
  const [randomBackground, setRandomBackground] = useState('#ffffff')
  const [randomButtonBackground, setRandomButtonBackground] = useState('#000000')

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF'
    let color = '#'
    let buttonColor = '#'

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]
      buttonColor += hexRange[Math.floor(Math.random() * 16)]
    }
    setRandomBackground(color)
    setRandomButtonBackground(buttonColor)
  }

  return (
    <>
    <StatusBar backgroundColor={randomBackground}/>
    <View style = {[styles.container, {backgroundColor: randomBackground}]}>
      <TouchableOpacity onPress = {generateColor}>
        <View style = {[styles.actionBtn, {backgroundColor: randomButtonBackground}]}>
          <Text style = {styles.actionBtnTxt}>Press me!</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#0db4b9',
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#000000',
    textTransform: 'uppercase',
  }
});
