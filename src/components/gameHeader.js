import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function GameHeader({nav, gameData}) {
  var lives = []

  onAddLivesBtnClicked = () => {
    nav.navigate('AddLifeScreens')
  }

  onBackBtnClicked = () => {
    nav.pop()
  }

  for (let i = 0; i < gameData.lives; i++) {
    lives.push(
      <Image key={i} source={require('../../assets/lives.png')} style={styles.image}/>
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={this.onBackBtnClicked}>
        <Image source={require('../../assets/backbutton.png')} style={styles.image}/>
      </TouchableOpacity>
      <View style={styles.rightContainer}>
        {lives}
        <TouchableOpacity onPress={this.onAddLivesBtnClicked}>
          <Image source={require('../../assets/add_live_button.png')} style={styles.image}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 60,
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
