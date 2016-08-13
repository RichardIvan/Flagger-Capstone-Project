/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import reducer from '../../../../src/js/reducers/components-state/navigation-component'

import {
  Map
} from 'immutable'

import {
  OPEN_NAVIGATION,
  CLOSE_NAVIGATION
} from '../../../../src/js/actions/constants'

describe('Side Navigation Reducer', () => {
  describe('Initial State', () => {
    let state

    beforeEach(function () {
      state = reducer()
    })
    it('should be a Map', () => {
      expect(Map.isMap(state)).toBe(true)
    })
    it('should have open = false', () => {
      expect(state.get('open')).toBe(false)
    })
  })

  describe('Functionality', () => {
    it('should return current state if unrecognized action type passed in', () => {
      const state = Map({
        open: true
      })
      expect(reducer(state)).toBe(state)
      expect(reducer(state, { type: 'NO_IDEA'})).toBe(state)
    })
    describe('#OPEN_NAVIGATION', () => {
      it('should not change state if already opened', () => {
        const state = Map({
          open: true
        })
        const newState = reducer(state, {
          type: OPEN_NAVIGATION
        })
        expect(state).toEqual(newState)
      })

      it('should change to true if current state is false ', () => {
        const state = Map({
          open: false
        })
        const newState = reducer(state, {
          type: OPEN_NAVIGATION
        })
        expect(newState.get('open')).toEqual(true)
      })
    })

    describe('#CLOSE_NAVIGATION', () => {
      it('should return the same state if menu already closed', () => {
        const state = Map({
          open: false
        })
        expect(reducer(state, { type: CLOSE_NAVIGATION })).toEqual(state)
      })
      it('should change open entry to false if currently opened', () => {
        const state = Map({
          open: true
        })
        const newState = reducer(state, { type: CLOSE_NAVIGATION })
        expect(newState.get('open')).toBe(false)
      })
    })
  })

})
