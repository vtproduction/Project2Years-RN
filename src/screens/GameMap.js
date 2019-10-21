import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Text } from 'react-native'
import * as GameData from '../model/GameData'
import GameHeader from '../components/gameHeader'

export class GameMap extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       gameData : {}
    };
  };
  
  

  async componentDidMount() {
    
    const gameData = await GameData.getGameData()
    console.log("componentDidMount: ", gameData)
    this.setState({
      gameData
    })
  }
  

  render() {
    const { navigation } = this.props
    console.log("render: ", this.state)
    return (
      <ImageBackground style={styles.background}
        source={require('./../../assets/bg.png')}>
        <View style={styles.container}>
          <GameHeader nav={navigation} gameData={this.state.gameData}/>
          <Text>GAME MAP</Text>
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

export default GameMap
