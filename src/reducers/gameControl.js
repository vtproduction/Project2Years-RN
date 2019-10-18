import * as types from '../config/actionTypes/gamePlay'

const MAX_LIFE = 5
const MAX_HELP = 5

const initialState = {
  currentLevel: 1,
  currentLife: MAX_LIFE,
  remainHelp: MAX_HELP
}


export default function gameControl(state = initialState, action = {}) {
  switch(action.type){
    case types.NEXT_LEVEL:
      return {
        ...state,
        currentLevel = currentLevel + 1
      }
    case types.INCREASE_LIFE:
      return {
        ...state,
        currentLife = (currentLife >= MAX_LIFE) ? MAX_LIFE : currentLife++
      }
    case types.DECREASE_LIFE:
      return {
        ...state,
        currentLevel = (currentLife <= 0) ? 0 : currentLife--
      }
    case types.DECREASE_HELP:
      return {
        ...state,
        currentLevel = (currentLevel <= 0) ? 0 : currentLevel--
      }
    case types.END_GAME:
      return state
    case types.RESET_GAME:
      return initialState
      
  }
}