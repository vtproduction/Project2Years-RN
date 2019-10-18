import * as types from '../config/actionTypes'
import dataSource from '../model/DataSource'

export function answerQuestion(questionId, answer) {
  return async dispatch => {
    const data = dataSource.find(q => q.id === questionId)
    if (JSON.stringify(data.answer) === JSON.stringify(answer)) {
      
    }else{
      
    }
  }
}



