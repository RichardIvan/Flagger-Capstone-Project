import Dexie from 'dexie'

import last from 'lodash/last'
import initial from 'lodash/initial'
import orderBy from 'lodash/orderBy'
import take from 'lodash/take'
import range from 'lodash/range'

import {
  setHighscores
} from '../actions'

import {
  put
} from 'redux-saga/effects'

const db = new Dexie('highscores')
db.version(1).stores({ users: ', name, score'})

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

export function* saveHighscoresToDexie(highscores) {
  const top10 = take(highscores, 10)
  yield db.transaction('rw', db.users, function* () {
    db.users.bulkPut(top10, range(top10.length))
  })
  yield put(setHighscores(top10))
}

// export function* saveHighscoresToDexie(highscores) {
//   db.transaction('rw', db.users, () => {
//     db.users.bulkPut(highscores)
//   }).then(_ => {
//     console.log(highscores)
//     yield put(setHighscores(highscores))
//   })
// }

export function saveNewHighscore(store, scores) {
  getHighscores().then(currentHighscores => {
    let highscores = currentHighscores.slice()
    scores.forEach(userScore => {
      last(highscores, lowestScore => {
        if (userScore.score >= lowestScore.score || highscores.length < 10) {
          userScore.id = lowestScore.id
          db.transaction('rw', db.users, () => {
            db.users.put(userScore)
          })
          highscores = [userScore].concat(initial(highscores))
          highscores = order(highscores)
          dispatch(setHighscores(highscores))
        }
      })
    })
  })
}
