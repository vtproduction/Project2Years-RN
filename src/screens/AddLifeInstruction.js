import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Text } from 'react-native'

export class AddLifeInstruction extends Component {

  render() {
    return (
      <ImageBackground style={styles.background}
        source={require('./../../assets/bg.png')}>
        <View style={styles.container}>
          <Text>Add Life Instruction</Text>
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

export default AddLifeInstruction
