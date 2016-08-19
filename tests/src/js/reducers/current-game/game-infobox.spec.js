/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  Map,
  fromJS
} from 'immutable'

import {
  SHOW_GAME_INFO,
  HIDE_GAME_INFO
} from '../../../../../src/js/actions/constants'

import reducer, { initialState } from '../../../../../src/js/reducers/current-game'

describe('Game Infobox Reducer', () => {
  describe('Initial State', () => {
    it('should have correct initial state', () => {
      const expectedState = Map({
        visible: false,
        text: ''
      })
      expect(reducer().get('gameInfobox')).toEqual(expectedState)
    })
    it('should return correct initial state on load', () => {
      expect(reducer()).toEqual(initialState)
    })
    it('should return state when no action passed in', () => {
      const state = {
        'yes': 'nope'
      }
      expect(reducer(state)).toEqual({
        'yes': 'nope'
      })
    })
    it('should return state if non recognized action is passed in', () => {
      const state = {
        'yes': 'nope'
      }
      expect(reducer(state, { type: 'DUNNO' })).toEqual({
        'yes': 'nope'
      })
    })
  })
  describe("I'll handle it", () => {
    it('should alter state on #SHOW_GAME_INFO', () => {
      const action = {
        type: SHOW_GAME_INFO,
        payload: {
          text: '3'
        }
      }
      expect(reducer(initialState, action).get('gameInfobox')).toEqual(fromJS({
        visible: true,
        text: '3'
      }))
      const state = Map({
        gameInfobox: Map({
          visible: true,
          text: '2'
        })
      })
      const nextAction = {
        type: SHOW_GAME_INFO,
        payload: {
          text: '2'
        }
      }
      expect(reducer(state, nextAction).get('gameInfobox')).toEqual(fromJS({
        visible: true,
        text: '2'
      }))
    })
    it('should set visible to false on #HIDE_GAME_INFO', () => {
      const action = {
        type: HIDE_GAME_INFO
      }
      expect(reducer(initialState, action).get('gameInfobox')).toEqual(fromJS({
        visible: false,
        text: ''
      }))
      const state = Map({
        gameInfobox: Map({
          visible: true,
          text: '3'
        })
      })
      expect(reducer(state, action).get('gameInfobox')).toEqual(fromJS({
        visible: false,
        text: '3'
      }))
      const anotherState = Map({
        gameInfobox: Map({
          visible: false,
          text: '3'
        })
      })
      expect(reducer(anotherState, action).get('gameInfobox')).toEqual(fromJS({
        visible: false,
        text: '3'
      }))
    })
  })
})
