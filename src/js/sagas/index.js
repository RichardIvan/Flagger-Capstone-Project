/* @flow */
'use strict'

import {
  START_GAME,
  OPEN_NAVIGATION,
  FLIP_COIN,
  NEW_SINGLE_PLAYER_GAME,
  SHOW_GAME_INFO
} from '../actions/constants'

import {
  take,
  fork,
  call,
  put,
  select
} from 'redux-saga/effects'

import {
  delay,
  takeEvery
} from 'redux-saga'

import {
  showGameInfo,
  hideGameInfo
} from '../actions/game/game-infobox'

import {
  newRound
} from '../actions/game'

import {
  getCurrentLevel
} from '../selectors'

export function* watchGame(): any {
  while(true) {
    const coundownDigits = ['3', '2', '1', 'Go!']
    const len = coundownDigits.length
    yield take(START_GAME)
    for (let i = 0; i < len; i++) {
      yield put(showGameInfo(coundownDigits[i]))
      yield call(delay, 500)
      yield put(hideGameInfo())
      yield call(delay, 800)
    }
    yield put(newRound())
  }
}

export function* watchNewRound(): any {
  // const stuff = yield take(START_GAME)

  // console.log(aaa)
  while(true) {

    const { payload } = yield take(SHOW_GAME_INFO)
    const nuberOfAnimations = yield select(getCurrentLevel)
    console.log(payload)
    console.log(nuberOfAnimations)
    // console.log(getState)
    // console.log(action)
    // yield console.log(getState)
  }
}

export function* rootSaga(): Generator<any, void, void> {
  yield [
    yield fork(watchGame),
    yield fork(watchNewRound)
  ]
  // yield* takeEvery('START_GAME', watchNewRound)

  // yield takeEvery(START_GAME, watchNewRound)
}
