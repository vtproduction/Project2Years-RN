import React, { Component } from 'react'
import {StyleSheet, View, ImageBackground, Text} from 'react-native'
import CustomButton from '../components/button'
export default class Splash extends Component {
  render() {
    return (
      <ImageBackground style={styles.background}
          source={require('./../../assets/bg.png')}>
          <View style={styles.container}>
            <CustomButton
              title='hehe'
              onPress={() => null} />
          </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 36,
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%"
  }
})
