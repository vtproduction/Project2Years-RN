import * as GameData from "../model/GameData";

export async function SplashRouting(navigation, showAddLiveDialogs) {
  await GameData.setDefaultGameData()
  const gameData = await GameData.getGameData()

  if (gameData.lives == 0) {
    showAddLiveDialogs()
  }else{
    navigation.navigate('GameMap')
  }
}