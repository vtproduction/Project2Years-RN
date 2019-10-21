import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function GameHeader({nav, gameData}) {
  
  console.log("GameHeader1: ", nav)
  console.log("GameHeader2: ", gameData)
  var lives = []

  onAddLivesBtnClicked = () => {
    nav.navigate('')
  }

  for (let i = 0; i < gameData.lives; i++) {
    lives.push(
      <Image key={i} source={require('../../assets/lives.png')} style={styles.image}/>
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require('../../assets/backbutton.png')} style={styles.image}/>
      </TouchableOpacity>
      <View style={styles.rightContainer}>
        {lives}
        <TouchableOpacity>
          <Image source={require('../../assets/add_live_button.png')} style={styles.image}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rightContainer:{
    flexDirection: 'row',
  },
  image: {
    width: 40,
    height: 40
  }
})
