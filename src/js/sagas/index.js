/* @flow */
'use strict'

import {
  START_GAME,
  OPEN_NAVIGATION,
  FLIP_COIN,
  NEW_SINGLE_PLAYER_GAME,
  SHOW_GAME_INFO,
  NEW_ROUND
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
  animateCoin
} from '../actions/coin'

import {
  newRound
} from '../actions/game'

import {
  getCurrentLevel
} from '../selectors'

import {
  generateAnimationSequence
} from '../helpers/game'

export function* watchGame(): any {
  while(true) {
    yield take(START_GAME)
    const coundownDigits = ['3', '2', '1', 'Go!']
    const len = coundownDigits.length
    for (let i = 0; i < len; i++) {
      yield put(showGameInfo(coundownDigits[i]))
      yield call(delay, 500)
      yield put(hideGameInfo())
      yield call(delay, 500)
    }
    yield put(newRound())
  }
}

export function* watchNewRound(): any {
  // const stuff = yield take(START_GAME)

  // console.log(aaa)
  while(true) {
    const { payload } = yield take(NEW_ROUND)
    const nuberOfAnimations: number = yield select(getCurrentLevel)
    // console.log(payload)
    const animationSequence = generateAnimationSequence(nuberOfAnimations)
    for (let i = 0; i < nuberOfAnimations; i++) {
      yield put(animateCoin(animationSequence[i]))
      yield call(delay, 400)
    }
    // console.log(nuberOfAnimations)
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
