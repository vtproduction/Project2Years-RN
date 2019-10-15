import React, { Component } from 'react'
import {StyleSheet, View, ImageBackground, Text} from 'react-native'
import CustomButton from '../components/button'
export default class Splash extends Component {
  render() {
    return (
      <ImageBackground style={styles.background}
          source={require('./../../assets/bg.png')}>
          <CustomButton
            title='hehe'
            onPress={() => null}/>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  background: {
    flex: 1,
    alignContent: "center",
    width: "100%",
    height: "100%"
  }
})
