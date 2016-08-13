/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  fromJS
} from 'immutable'

import {
  OPEN_NAVIGATION,
  CLOSE_NAVIGATION
} from '../../../../src/js/actions/constants'


import reducer, {
  initialState
} from '../../../../src/js/reducers/components-state/overlay-component'

describe.only('Overlay State reducer', () => {
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
  })
})
