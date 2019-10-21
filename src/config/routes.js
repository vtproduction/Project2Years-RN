import React from 'react'

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation';
import GameMap from '../screens/GameMap';
import AddLifeInstruction from '../screens/AddLifeInstruction';
import Splash from '../screens/Splash';


const AddLifeScreens = createStackNavigator(
  {
    Instruction: { 
      screen: AddLifeInstruction,
      navigationOptions: {
        header: null
      } 
    }
  }
)


const GameScreens = createStackNavigator(
  {
    GameMap: {
      screen: GameMap,
      navigationOptions: {
        header: null
      }},
    AddLifeScreens: { 
      screen: AddLifeScreens,
      navigationOptions: {
        header: null
      } }
  }
)


const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions:{
        header: null
      }
    },
    GameScreens: { 
      screen: GameScreens,
      navigationOptions: {
        header: null
      } 
    },
    AddLifeScreens: { 
      screen: AddLifeScreens,
      navigationOptions: {
        header: null
      } 
    },
  },{
    initialRouteName: 'Splash'
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer