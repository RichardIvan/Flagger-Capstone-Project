/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import reducer from '../../../../../src/js/reducers/current-game'

import {
  startGame
} from '../../../../../src/js/actions/game'

import {
  Map,
  List
} from 'immutable'

describe('Current Game Reducer', () => {
  let state
  let action
  let newState
  beforeEach(function () {
    action = startGame()
    state = Map({
      controls: List.of(
        Map({
          rotateY: 1,
          rotateZ: 2
        }),
        Map({
          rotateY: 3,
          rotateZ: 4
        }),
        Map({
          rotateY: 5,
          rotateZ: 6
        })
      ),
      coin: Map({
        rotateY: 1,
        rotateZ: 2
      }),
      gameInfobox: Map({
        visible: false,
        text: ''
      }),
      scores: Map({
        players: Map({
          abc: 22,
          xyz: 33
        })
      }),
      level: 22
    })
    newState = reducer(state, action)
  })
  describe('START_GAME should reset the current game', () => {
    it('should reset coin to 0, 0 position', () => {
      expect(newState.get('coin')).toEqual(Map({
        rotateY: 0,
        rotateZ: 0
      }))
    })
    it('should reset current playsers scores to 0', () => {
      const players = newState.getIn(['scores', 'players'])
      players.map(player => expect(player).toBe(0))
    })
    it('should reset the level back to 1', () => {
      expect(newState.get('level')).toBe(1)
    })
    it('should not removied currently added player in multiplayer', () => {
      expect(newState.getIn(['scores', 'players']).count()).toBe(2)
    })
    it('should reset the controls', () => {
      expect(newState.get('controls').get(0)).toEqual(Map({
        rotateY: 0,
        rotateZ: 0
      })),
      expect(newState.get('controls').get(1)).toEqual(Map({
        rotateY: 0,
        rotateZ: 90
      })),
      expect(newState.get('controls').get(2)).toEqual(Map({
        rotateY: 0,
        rotateZ: 180
      }))
    })
  })
})
