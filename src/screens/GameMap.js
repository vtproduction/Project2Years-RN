import React, { Component } from 'react'
import { StyleSheet, 
  View, 
  ImageBackground, 
  SafeAreaView, 
  FlatList, Dimensions } from 'react-native'
import * as GameData from '../model/GameData'
import GameHeader from '../components/gameHeader'
import CustomButton from '../components/button'
import DataSource from '../model/DataSource'
import GameChooser from '../components/gameChooser'



export class GameMap extends Component {
  
  constructor(props) {
    super(props)
    const dataSource = DataSource
    this.state = {
      gameData : {isComplete: false},
      dataSource,
      loading: true
    };
  };
  
  async componentDidMount() {
    const gameData = await GameData.getGameData()
    this.setState({
      gameData,
      loading: false
    })
  }
  
  renderGameChooser = (game) => {    
    const { gameData } = this.state
    let locked = gameData.currentStage - game.id
    return <GameChooser stage={game.id} isLocked={locked} onStageClicked={() => null}/>
  }

  

  render() {
    const { navigation } = this.props
    const { gameData, dataSource, loading} = this.state
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground style={styles.background}
          source={require('./../../assets/bg.png')}>
          <View style={styles.container}>
            <GameHeader 
              nav={navigation} 
              gameData={gameData}/>
            <View style={styles.list}>
              {(!loading) && (
                <FlatList
                style={styles.flatlist}
                numColumns={3}
                data={dataSource}
                keyExtractor={item => item.id}
                extraData={this.state}
                renderItem={({ item }) => this.renderGameChooser(item)}
              />
              )}
            </View>
            {(gameData.isComplete) &&
              <View style={styles.bottom}>
                <CustomButton 
                  title="show result" 
                  onPress={() => null} />
              </View>
            }
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
    flex: 1,
    
    paddingLeft: 10,
    paddingRight: 10,
  },
  flatlist: {
    
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
