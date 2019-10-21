import { AsyncStorage } from "react-native";
import * as AppConstant from '../config/constant'
import DataSource from './DataSource'

const MAX_LIVE = 3
const MAX_STAGE = DataSource.length
const MAX_HELP = 3

const InitialGameData = {
  lives: 0,
  currentStage: 1,
  maxStage: MAX_STAGE,
  isComplete: false,
  remainingHelps: MAX_HELP
}

export async function getGameData() {
  try {
    let dataStr = await AsyncStorage.getItem(AppConstant.AS_KEY_GAME_DATA)
    if (dataStr) {
      let data = JSON.parse(dataStr)
      return data
    }else{
      let defaultData = JSON.stringify(InitialGameData)
      await AsyncStorage.setItem(AppConstant.AS_KEY_GAME_DATA, defaultData)
      return defaultData
    }
  } catch (error) {
    console.log(error)
    let defaultData = JSON.stringify(InitialGameData)
    await AsyncStorage.setItem(AppConstant.AS_KEY_GAME_DATA, defaultData)
    return defaultData
  }
}

export async function setGameData(gameData) {
  try {
    await AsyncStorage.setItem(AppConstant.AS_KEY_GAME_DATA, JSON.stringify(gameData))
    return true
  } catch (e) {
    console.error(e);
    return false
  }
}

export async function setDefaultGameData() {
  return setGameData(InitialGameData)
}






