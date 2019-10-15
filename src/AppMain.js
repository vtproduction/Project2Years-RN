import React, { Component } from 'react'
import {StyleSheet, View,Text} from 'react-native'
import Splash from './screens/Splash'


export default class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Splash/>
      </View>    
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 