import * as GameData from "../model/GameData";

export async function SplashRouting(navigation, showAddLiveDialogs) {
  const gameData = GameData.getGameData()

  if (gameData.lives == 0) {
    showAddLiveDialogs()
  }else{
    navigation.navigate('GameMap')
  }
}