/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  fromJS,
  Map
} from 'immutable'

import {
  OPEN_NAVIGATION,
  CLOSE_NAVIGATION
} from '../../../../src/js/actions/constants'

import {
  showExitGamePrompt,
  resumeGame
} from '../../../../src/js/actions/game'


import reducer, {
  initialState
} from '../../../../src/js/reducers/components-state/overlay-component'

describe('Overlay State reducer', () => {
  describe('Initial State', () => {
    it('should have open = false', () => {
      expect(reducer().get('open')).toBe(false)
    })
    it('should return state if no action or state is passed to reducer', () => {
      expect(reducer()).toEqual(initialState)
    })
  })
  describe('Reducer', () => {
    it('#OPEN_NAVIGATION sets open status to true', () => {
      expect(reducer(initialState, {
        type: OPEN_NAVIGATION
      })).toEqual(fromJS({
        open: true
      }))
    })
    it('should return same state if the navigation is already opened', () => {
      let state = initialState.set('open', true)
      expect(reducer(state, {
        type: OPEN_NAVIGATION
      })).toEqual(fromJS({
        open: true
      }))
    })
    it('#CLOSE_NAVIGATION sets open status to false', () => {
      let state = initialState.set('open', true)
      expect(reducer(state, {
        type: CLOSE_NAVIGATION
      })).toEqual(fromJS({
        open: false
      }))
    })
    it('should return same state if the navigation is already closed', () => {
      expect(reducer(initialState, {
        type: CLOSE_NAVIGATION
      })).toEqual(fromJS({
        open: false
      }))
    })
    it('should return state if unrecognized type is passed in', () => {
      let newState = reducer(initialState, { type: 'NO_IDEA' })
      expect(newState).toEqual(initialState)
      // newState = reducer(initialState, { type: 'OPEN_NAVIGATION' })
      // expect().toNotEqual(initialState)
    })
    it('should return state if no action is passed in', () => {
      let newState = reducer(initialState)
      // console.log(newState.toJS())
      expect(newState).toEqual(fromJS({
        open: false
      }))
    })
    it('#SHOW_EXIT_GAME_PROMPT should set the open property to true', () => {
      let newState = reducer(initialState, showExitGamePrompt())
      expect(newState.get('open')).toBe(true)
    })
    it('#RESUME_GAME should set the open state to false', () => {
      const state = Map({
        open: true
      })
      let newState = reducer(state, resumeGame())
      expect(newState.get('open')).toBe(false)
    })
  })
})
