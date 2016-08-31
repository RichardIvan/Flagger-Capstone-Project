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
  SUBMIT_GUESS,
  SHOW_EXIT_GAME_PROMPT,
  CHANGE_ROUTE,
  RESULTS_ROUTE,
  RESUME_GAME,
  CANCEL_GAME,
  MENU_ROUTE,
  EXIT_GAME,
  REPLAY_GAME
} from '../actions/constants'

import isEqual from 'lodash/isEqual'

import {
  take,
  fork,
  call,
  put,
  select,
  race,
  cancel,
  cancelled
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
  saveRoundResult,
  saveAnimationSequence
} from '../actions/game'

import {
  changeRoute
} from '../actions/application'

import {
  enableControls,
  disableControls,
  randomizeControls
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

export function* startNewGame(): any {
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

export function* cancelCurrentGame(currentGame: Object): any {
  while( yield take(CANCEL_GAME) ) {
    yield cancel(currentGame)
    yield put(changeRoute(MENU_ROUTE))
  }
}

export function* watchGame(): any {
  while(true) {
    try {
      yield take([START_GAME, REPLAY_GAME])
      const runningGame = yield fork(startNewGame)
      yield fork(cancelCurrentGame, runningGame)
    } finally {
      if ( yield cancelled() ) {
        put(changeRoute(RESULTS_ROUTE))
      }
    }
  }
}

export function* delaydedHidingInfo(): any {
  yield call(delay, 500)
  yield put(hideGameInfo())
}

export function* playAnimation(): any {
  yield put(overlayCoin())
  yield put(disableControls())
  yield call(delay, 1000)

  const level = yield select(getCurrentLevel)
  const animationSequence = generateAnimationSequence(level)
  yield put(saveAnimationSequence(animationSequence))

  for (let i = 0; i < level; i++) {
    yield put(animateCoin(animationSequence[i]))
    yield call(delay, 2000)
  }
}

export function* pauseCurrentRound(currentRound: Object): any {
  while( yield take(SHOW_EXIT_GAME_PROMPT) ) {
    yield cancel(currentRound)
  }
}

export function* runNewRound(): any {
  const currentRound = yield fork(playNewRound)
  yield fork(pauseCurrentRound, currentRound)
}

export function* runResumeGame(): any {
  yield put(removeCoinOverlay())
  yield call(delay, 1500)
  yield put(showGameInfo('GO!'))
  yield fork(delaydedHidingInfo)
  yield put(newRound())
}

export function* playNewRound(): any {
  const level = yield select(getCurrentLevel)

  yield call(playAnimation)
  yield put(randomizeControls(yield select(getCurrentCoinState)))
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
  yield call(delay, 200)

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
  yield call(delay, 2000)
  yield put(hideGameInfo())

  if (level > 1 && points === 0) {
    yield put(changeRoute(RESULTS_ROUTE))
  } else {
    yield put(newRound())
  }
}

export function* watchNewRound(): any {
  yield [
    takeEvery(NEW_ROUND, runNewRound),
    takeEvery(RESUME_GAME, runResumeGame)
  ]
}

export function* watchRouteChange(): any {
  while(true) {
    const { payload } = yield take([CHANGE_ROUTE, EXIT_GAME, REPLAY_GAME])
    const { route } = payload
    m.route.set(route)
  }
}

export function* rootSaga(): Generator<any, void, void> {
  yield [
    fork(watchGame),
    fork(watchNewRound),
    fork(watchRouteChange)
  ]
}
