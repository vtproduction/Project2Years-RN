import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Text, SafeAreaView } from 'react-native'
import * as GameData from '../model/GameData'
import GameHeader from '../components/gameHeader'
import CustomButton from '../components/button'

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
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground style={styles.background}
          source={require('./../../assets/bg.png')}>
          <View style={styles.container}>
            <GameHeader 
              nav={navigation} 
              gameData={this.state.gameData}/>
            <View style={styles.list}></View>
            <View style={styles.bottom}>
              <CustomButton 
                title="show result" 
                onPress={() => null} />
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  list: {
    flex: 1
  },
  bottom: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    marginBottom: 20,
    height: 40
  }
})

export default GameMap
