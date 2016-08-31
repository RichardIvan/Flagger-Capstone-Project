/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  Map
} from 'immutable'

import {
  enableControls,
  disableControls
} from '../../../../../src/js/actions/controls'

import {
  resumeGame
} from '../../../../../src/js/actions/game'

import {
  SWITCH_CONTROL_STATE
} from '../../../../../src/js/actions/constants'

import reducer, { initialState } from '../../../../../src/js/reducers/components-state/controls-component'

describe('controls component State Reducer', () => {
  describe('Initial State', () => {
    it('should be a Map', () => {
      expect(reducer()).toBeA(Map)
    })
    it('should be initiated with the correct shape and values', () => {
      expect(reducer()).toEqual(Map({
        disabled: false
      }))
    })
    it('should return state if no action passed in', () => {
      expect(reducer()).toEqual(initialState)
    })
    it('should return state if no recognized action type passed in', () => {
      const action = {
        type: 'DUNNO'
      }
      expect(reducer(initialState, action)).toEqual(initialState)
    })
    it('should should return state if no type field in action', () => {
      expect(reducer(initialState, {payload: 'action'})).toEqual(initialState)
    })
    it('should return map with disabled true, when enable action paseed in', () => {
      const state = Map({
        disabled: true
      })
      expect(reducer(state, enableControls())).toEqual(Map({
        disabled: false
      }))
    })
    it('should return current state if no disabled present in action payload', () => {
      const state = Map({
        disabled: true
      })
      expect(reducer(state, {
        type: SWITCH_CONTROL_STATE,
        payload: {
          full: true
        }
      })).toEqual(Map({
        disabled: true
      }))
    })
    it('#RESUME_GAME should set disabled to false', () => {
      const state = Map({
        disabled: true
      })
      expect(reducer(state, resumeGame()).get('disabled')).toBe(false)
    })
  })
})
