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
      scores: List.of(0, 1),
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
      players.map(score => expect(score).toBe(0))
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
})
