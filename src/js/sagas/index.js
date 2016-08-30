/* @flow */
'use strict'

import m from 'mithril'

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
  enableControls,
  disableControls
} from '../actions/controls'

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

export function showResults() {
  m.route.set('/results')
}

export function* delaydedHidingInfo(): any {
  yield call(delay, 500)
  yield put(hideGameInfo())
}

export function* runNewRound(): any {
  yield put(overlayCoin())
  yield put(disableControls())
  yield call(delay, 1000)

  const nuberOfAnimations: number = yield select(getCurrentLevel)
  const animationSequence = generateAnimationSequence(nuberOfAnimations)
  for (let i = 0; i < nuberOfAnimations; i++) {
    yield put(animateCoin(animationSequence[i]))
    yield call(delay, 3000)
  }

  // disable controls before this point
  yield put(showGameInfo('GO!'))
  yield put(enableControls())
  // yield call(delay, 500)
  yield fork(delaydedHidingInfo)

  let start = new Date()

  const {submissionAction, timeout} = yield race({
    timeout: call(delay, 3500),
    submissionAction: take(SUBMIT_GUESS)
  })

  yield put(removeCoinOverlay())
  yield call(delay, 1000)

  let points = 0
  if (submissionAction) {
    const { payload } = submissionAction
    const { answer, end } = payload

    const differenceInMs = diffInMs(end, start)
    const differenceInSeconds = diffInSeconds(end, start)

    let currentCoinState = yield select(getCurrentCoinState)
    currentCoinState = currentCoinState.toJS()

    if (isEqual(currentCoinState, answer)) {
      points = (3 - differenceInSeconds) * 10
    }
  }

  //bug here, it is trying to add a string to the results
  yield put(saveRoundResult(points))
  yield call(delay, 4000)
  yield put(hideGameInfo())

  if (nuberOfAnimations > 1 && points === 0) {
    yield call(showResults)
  } else {
    yield put(newRound())
  }
}

export function* watchNewRound(): any {
  yield takeEvery(NEW_ROUND, runNewRound)
}

export function* rootSaga(): Generator<any, void, void> {
  yield [
    fork(watchGame),
    fork(watchNewRound)
  ]
}
