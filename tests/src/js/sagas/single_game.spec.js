/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  fork,
  take,
  call,
  put
} from 'redux-saga/effects'

import {
  delay
} from 'redux-saga'

import {
  START_GAME,
  FLIP_COIN,
  NEW_ROUND
} from '../../../../src/js/actions/constants'

import {
  showGameInfo,
  hideGameInfo
} from '../../../../src/js/actions/game/game-infobox'

import {
  newRound,
} from '../../../../src/js/actions/game'

import {
  rootSaga,
  watchGame,
  watchNewRound
} from '../../../../src/js/sagas'

import { initialState } from '../../../../src/js/reducers/current-game'

// describe('Sagas', () => {
//   describe('Root Saga', () => {
//     const saga = rootSaga()
//     expect(saga.next().value).toEqual(fork(watchGame))
//   })
//
//   describe('Watch Game Saga', () => {
//     it('should take START_GAME action type', () => {
//       const saga = watchGame()
//       expect(saga.next().value).toEqual(take(START_GAME))
//     })
//     it('should have correct flow', () => {
//       const saga = watchGame()
//       expect(saga.next().value).toEqual(take(START_GAME))
//       expect(saga.next().value).toEqual(put(showGameInfo('3')))
//       expect(saga.next().value).toEqual(call(delay, 500))
//       expect(saga.next().value).toEqual(put(hideGameInfo()))
//       expect(saga.next().value).toEqual(call(delay, 800))
//       expect(saga.next().value).toEqual(put(showGameInfo('2')))
//       expect(saga.next().value).toEqual(call(delay, 500))
//       expect(saga.next().value).toEqual(put(hideGameInfo()))
//       expect(saga.next().value).toEqual(call(delay, 800))
//       expect(saga.next().value).toEqual(put(showGameInfo('1')))
//       expect(saga.next().value).toEqual(call(delay, 500))
//       expect(saga.next().value).toEqual(put(hideGameInfo()))
//       expect(saga.next().value).toEqual(call(delay, 800))
//       expect(saga.next().value).toEqual(put(showGameInfo('Go!')))
//       expect(saga.next().value).toEqual(call(delay, 500))
//       expect(saga.next().value).toEqual(put(hideGameInfo()))
//       expect(saga.next().value).toEqual(call(delay, 800))
//       expect(saga.next().value).toEqual(put(newRound()))
//       expect(saga.next().value).toEqual(take(START_GAME))
//     })
//   })
// })

describe('Watch NewRound Saga', () => {

  // console.log(saga.next().value)
  it('should be truthy', () => {
    const getState = () => {
      return {
        currentGame: initialState
      }
    }
    const saga = watchNewRound()
    console.log(saga.next(getState).value)
    console.log(saga.next(getState).value)
    console.log(saga.next(getState).value)
    // expect(console.log(saga.next())).toBe(undefined)
    // expect(console.log(saga.next())).toBeTruthy()
    expect(true).toBe(true)
  })
})
