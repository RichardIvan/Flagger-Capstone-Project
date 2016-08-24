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

import isEqual from 'lodash/isEqual'

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
  newRound,
  saveRoundResult
} from '../actions/game'

import {
  getCurrentLevel,
  getCurrentCoinState
} from '../selectors'

import {
  generateAnimationSequence
} from '../helpers/game'

import diffInMs from 'date-fns/difference_in_milliseconds'
import diffInSeconds from 'date-fns/difference_in_seconds'

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

export function* runNewRound(): any {
  yield put(overlayCoin())
  yield call(delay, 1000)

  const nuberOfAnimations: number = yield select(getCurrentLevel)
  const animationSequence = generateAnimationSequence(nuberOfAnimations)
  for (let i = 0; i < nuberOfAnimations; i++) {
    yield put(animateCoin(animationSequence[i]))
    yield call(delay, 3000)
  }

  let start = new Date()

  const {submissionAction, timeout} = yield race({
    submissionAction: take(SUBMIT_GUESS),
    timeout: call(delay, 3500)
  })

  yield put(removeCoinOverlay())


  if (submissionAction) {
    const { payload } = submissionAction
    const { answer, end } = payload
    const differenceInMs = diffInMs(end, start)
    const differenceInSeconds = diffInSeconds(end, start)
    let currentCoinState = yield select(getCurrentCoinState)
    currentCoinState = currentCoinState.toJS()
    console.log(currentCoinState)
    console.log(answer)
    console.log(isEqual(currentCoinState, answer))

    let points = 0
    if (isEqual(currentCoinState, answer)) {
      points = (3 - differenceInSeconds) * 10
      console.log(points)
    }
    yield put(saveRoundResult(points))
  } else {
    // put timeout here
    console.log('why not')
    if (nuberOfAnimations < 10) {
      // Promise.resolve()
      yield put(saveRoundResult(0))
      yield call(delay, 2000)
      yield put(newRound())
      console.log('why yes')
    } else {
      yield put(showResults())
    }
  }
}

export function* watchNewRound(): any {
  yield takeEvery(NEW_ROUND, runNewRound)
  // while(true) {
  //   console.log('here')
  //   // yield takeEvery(NEW_ROUND)
  //   yield take(NEW_ROUND)
  //   console.log('or here')
  //
  //
  //   }
  // }
}

export function* rootSaga(): Generator<any, void, void> {
  yield [
    fork(watchGame),
    fork(watchNewRound)
  ]
  // yield* takeEvery('START_GAME', watchNewRound)

  // yield takeEvery(START_GAME, watchNewRound)
}
