/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  fromJS,
  Map
} from 'immutable'

import {
  SET_COIN_POSITION
} from '../../../../../src/js/actions/constants'

import reducer, { initialState } from '../../../../../src/js/reducers/current-game/coin'

describe('Coin State Reducer', () => {
  it('should return correct initial state', () => {
    expect(reducer()).toEqual(fromJS({
      rotateY: 0,
      rotateZ: 0
    }))
  })
  it('should return state if no action passed in', () => {
    expect(reducer(initialState)).toEqual(fromJS({
      rotateY: 0,
      rotateZ: 0
    }))
  })
  it('should return state if unknown action type passed in', () => {
    expect(reducer(initialState, { type: 'HEY_HO' })).toEqual(fromJS({
      rotateY: 0,
      rotateZ: 0
    }))
  })
  it('should return update updated rotateY value based on payload', () => {
    const action = {
      type: SET_COIN_POSITION,
      payload: Map({
        rotateY: 90
      })
    }
    expect(reducer(initialState, action)).toEqual(fromJS({
      rotateY: 90,
      rotateZ: 0
    }))
  })
  it('state should be immutable', () => {
    const state = initialState
    const action = {
      type: SET_COIN_POSITION,
      payload: Map({
        rotateY: 90
      })
    }
    const newState = reducer(initialState, action)
    expect(state).toBe(state)
  })

  describe('#FLIP_COINT action', () => {
    it('should increase rotateY value by 180', () => {
      const action = {
        type: 'FLIP_COIN'
      }
        expect(reducer(initialState, action)).toEqual(fromJS({
          rotateY: 180,
          rotateZ: 0
        }))
    })
    // it('should set the transitionValue to .4s;', () => {
    //
    // })
  })
})
