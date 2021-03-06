/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import reducer, { initialState } from '../../../../../src/js/reducers/current-game'

import {
  startGame,
  saveAnimationSequence
} from '../../../../../src/js/actions/game'

import {
  generateAnimationSequence
} from '../../../../../src/js/helpers/game'

import {
  Map,
  List
} from 'immutable'

import {
  START_SINGLE_GAME,
  START_MULTI_GAME
} from '../../../../../src/js/actions/constants'

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
      scores: List.of(
        Map({
          name: 'ASDF',
          score: 0
        }),
        Map({
          name: 'ASDF',
          score: 1
        })
      ),
      level: 22,
      animationSequence: List.of()
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
      const players = newState.get('scores')
      players.map(player => expect(player.get('score')).toBe(0))
    })
    it('should reset the level back to 1', () => {
      expect(newState.get('level')).toBe(1)
    })
    it('should not remove currently added player in multiplayer', () => {
      expect(newState.get('scores').count()).toBe(2)
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
  describe('INITIAL STATE', () => {
    it('should have animation sequence entry', () => {
      expect(initialState.has('animationSequence')).toBe(true)
    })
    it('should animation sequence entry should be an empty List', () => {
      expect(initialState.get('animationSequence')).toBeA(List)
    })
  })
  describe('animationSequence Entry', () => {
    let action
    let level = 3
    let animationSequence
    beforeEach(function () {
      animationSequence = generateAnimationSequence(level)
      action = saveAnimationSequence(animationSequence)
    })
    it('should #SAVE_ANIMATION_SEQUENCE should create List of the same lenght', () => {
      expect(reducer(initialState, action).get('animationSequence').count()).toBe(level)
    })
  })
  describe('#START_SINGLE_GAME', () => {
    it('should remove second player if there is one', () => {
      const action = {
        type: START_SINGLE_GAME
      }
      expect(state.get('scores').count()).toBe(2)
      expect(reducer(state, action).get('scores').count()).toBe(1)
    })
  })
  describe('#START_MULTI_GAME', () => {
    it('should add second player if there is only one', () => {
      const action = {
        type: START_MULTI_GAME
      }
      expect(state.get('scores').count()).toBe(2)
      expect(reducer(state.deleteIn(['scores', 1]), action).get('scores').count()).toBe(2)
    })
  })
})
