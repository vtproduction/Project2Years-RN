import React, { Component } from 'react'
import {StyleSheet, View, ImageBackground, Text, Alert} from 'react-native'
import CustomButton from '../components/button'
import * as Controller from '../controllers/GameController'


export default class Splash extends Component {

  onStartBtnPress = () =>{
    const {navigation} = this.props
    Controller.SplashRouting(navigation, this.showAddLiveDialogs)
  }

  showAddLiveDialogs = () => {
  }

  render() {
    return (
      <ImageBackground style={styles.background}
          source={require('./../../assets/bg.png')}>
          <View style={styles.container}>
            <CustomButton
              title='hehe'
            onPress={this.onStartBtnPress} />
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
