import Dexie from 'dexie'

import last from 'lodash/last'
import initial from 'lodash/initial'
import orderBy from 'lodash/orderBy'
import take from 'lodash/take'

import {
  setHighscores
} from '../actions'

const db = new Dexie('highscores')
db.version(1).stores({ users: '++id, name, score'})

export function order(array) {
  return orderBy(array, (item) => {
    return item.score
  }, 'desc')
}

const getHighscores = () => {
  return db.transaction('r', db.users, () => {
    let highscores = db.users.toArray()
    if (highscores.length) {
      highscores = order(highscores)
    }
    return highscores
  })
}

export function initializeHighscores(store) {
  getHighscores().then(highscores => {
    store.dispatch(setHighscores(highscores))
  })
}

export function saveNewHighscore(store, scores) {
  getHighscores().then(currentHighscores => {
    let highscores = take(currentHighscores.slice(), 10)
    const [ P1, P2 ] = scores
    scores.forEach(userScore => {
      last(currentHighscores, lowestScore => {
        if (userScore.score > lowestScore.score || highscores.length < 10) {
          userScore.id = lowestScore.id
          db.transaction('w', db.users, () => {
            db.put(userScore)
          })
          highscores = [userScore].concat(initial(highscores))
          highscores = order(highscores)
        }
      })
    })
  })
}
