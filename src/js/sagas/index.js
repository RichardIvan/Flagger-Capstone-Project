/* @flow */
'use strict'

import m from 'mithril'

import last from 'lodash/last'
import isEmpty from 'lodash/isEmpty'
import size from 'lodash/size'
import isEqual from 'lodash/isEqual'
import takeFrom from 'lodash/take'

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
  REPLAY_GAME,
  SAVE_ROUND_RESULT,
  PLAYING_SINGLEPLAYER_ROUTE,
  PLAYING_MULTIPLAYER_ROUTE,
  START_SINGLE_GAME,
  START_MULTI_GAME,
  SET_PLAYER_NAME
} from '../actions/constants'

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
  setNewHighscore,
  setHighscores
} from '../actions'

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
  getCurrentCoinState,
  getSelectedCoinState,
  getHighscores,
  getPlayersScores
} from '../selectors'

import {
  generateAnimationSequence
} from '../helpers/game'

import {
  order,
  saveHighscoresToDexie
} from '../services/dexie'

import diffInMs from 'date-fns/difference_in_milliseconds'
import diffInSeconds from 'date-fns/difference_in_seconds'

export function* startNewGame(): any {
  const coundownDigits = ['3', '2', '1', 'Go!']
  const len = coundownDigits.length
  for (let i = 0; i < len; i++) {
    yield put(showGameInfo(coundownDigits[i]))
    yield call(delay, 500)
    yield put(hideGameInfo())
    yield call(delay, 250)
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
      yield take([START_SINGLE_GAME, START_MULTI_GAME ,REPLAY_GAME])
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
  const level = yield select(getCurrentLevel)

  yield put(overlayCoin())
  yield put(disableControls())
  yield call(delay, 1000)

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

  yield put(hideGameInfo())
  yield put(showGameInfo(`LVL ${level}`))
  yield call(delay, 2000)
  yield put(hideGameInfo())
  //
  yield call(playAnimation)

  const currentCoinState = yield select(getCurrentCoinState)
  yield put(randomizeControls(currentCoinState))
  yield put(showGameInfo('GO!'))
  yield put(enableControls())
  yield fork(delaydedHidingInfo)

  let start = new Date()

  const {submissionAction, timeout} = yield race({
    timeout: call(delay, 3500),
    submissionAction: take(SUBMIT_GUESS)
  })

  yield put(removeCoinOverlay())
  yield call(delay, 200)

  let points = 0
  let playerIndex = 0
  if (submissionAction) {
    const { payload } = submissionAction
    const { answer, end, player } = payload

    playerIndex = player
    // console.log(answer)

    const differenceInMs = diffInMs(end, start)
    const differenceInSeconds = diffInSeconds(end, start)

    let currentCoinState = yield select(getCurrentCoinState)
    let selectedAnswerCoinState = yield select(getSelectedCoinState, answer)
    currentCoinState = currentCoinState.toJS()

    if (isEqual(currentCoinState, selectedAnswerCoinState)) {
      points = (3 - differenceInSeconds) * 10
    }
  }

  // bug here, it is trying to add a string to the results
  yield put(saveRoundResult(points, playerIndex))
  yield call(delay, 500)
  yield put(hideGameInfo())
  yield call(delay, 1000)


  const scores = yield select(getPlayersScores)
  const isMultiplayerGame = scores.length > 1
  if (!isMultiplayerGame && level > 1 && !points) {
    yield put(changeRoute(RESULTS_ROUTE))
  } else if (isMultiplayerGame && !points) {
    const [ P1, P2 ] = scores
    const difference = Math.abs(P1.score - P2.score)
    if(difference > 90 || level > 10) {
      yield put(changeRoute(RESULTS_ROUTE))
    } else {
      yield put(newRound())
    }
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
    switch (route) {
      case PLAYING_SINGLEPLAYER_ROUTE:
        yield put({type: START_SINGLE_GAME})
        break
      case PLAYING_MULTIPLAYER_ROUTE:
        yield put({type: START_MULTI_GAME})
        break
      default:
        break
    }
    m.route.set(route)
  }
}

export function* watchActionToSaveScores(): any {
  while(true) {
    // yield take(EXIT_GAME)
    yield take([SET_PLAYER_NAME])
    let highscores = order(yield select(getHighscores))
    const scores = yield select(getPlayersScores)
    //
    if(!isEmpty(highscores)) {
      scores.forEach(playerInfo => {
        const lowestItem = last(highscores)
        if (playerInfo.name && playerInfo.score && playerInfo.score >= lowestItem.score) {
          // playerInfo.id = lowestItem.id
          highscores = [playerInfo].concat(takeFrom(highscores, 9))
        }
      })
    } else {
      scores.forEach(playerInfo => {
        highscores = scores
      })
    }
    // // yield put(setHighscores(highscores))
    yield call(saveHighscoresToDexie, order(highscores))
  }
}

export function* watchSaveRoundResults(): any {
  while (true) {
    yield take(RESULTS_ROUTE)
    let highscores = order(yield select(getHighscores))
    // console.log(highscores)
    if (!isEmpty(highscores)) {
      let isHighscore
      if (size(highscores) < 10) {
        isHighscore = true
      }
      // highscores = highscores.map(info => info.score)
      const scores = yield select(getPlayersScores)

      scores.forEach(playerInfo => {
        if (playerInfo.score >= last(highscores).score) {
          isHighscore = true
          // highscores = [playerInfo].concat(take(highscores, 9))
        }
      })
      if(isHighscore) {
        yield put(setNewHighscore(true))
      }
    } else {
      yield put(setNewHighscore(true))
    }
  }
}

export function* rootSaga(): Generator<any, void, void> {
  yield [
    fork(watchGame),
    fork(watchNewRound),
    fork(watchRouteChange),
    fork(watchSaveRoundResults),
    fork(watchActionToSaveScores)
  ]
}
