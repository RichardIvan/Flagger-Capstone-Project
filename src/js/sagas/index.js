/* @flow */
'use strict'

import {
  START_GAME,
  OPEN_NAVIGATION,
  FLIP_COIN,
  NEW_SINGLE_PLAYER_GAME,
  SHOW_GAME_INFO,
  NEW_ROUND,
  SUBMIT_GUESS
} from '../actions/constants'

import {
  take,
  fork,
  call,
  put,
  select,
  race
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
  animateCoin,
  overlayCoin,
  removeCoinOverlay
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
  while(true) {
    yield take(NEW_ROUND)

    yield put(overlayCoin())
    yield call(delay, 1000)

    let start = Date.now()

    const nuberOfAnimations: number = yield select(getCurrentLevel)
    const animationSequence = generateAnimationSequence(nuberOfAnimations)
    for (let i = 0; i < nuberOfAnimations; i++) {
      yield put(animateCoin(animationSequence[i]))
      yield call(delay, 3000)
    }

    const {submissionAction, timeout} = yield race({
      submissionAction: take(SUBMIT_GUESS),
      timeout: call(delay, 3500)
    })

    yield put(removeCoinOverlay())

    // if (submissionAction) {
    //   const { answer, end } = submissionAction.payload
    //   const currentCoinState = yield select(getCurrentCoinState)
    //   let points = 0
    //   if (currentCoinState === answer) {
    //     points = Math.round(start - end) * 10
    //   }
    //   yield put(saveRoundResult(points))
    // } else {
    //   if (nuberOfAnimations < 10) {
    //     yield put(newRound())
    //   } else {
    //     yield put(showResults())
    //   }
    // }
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
