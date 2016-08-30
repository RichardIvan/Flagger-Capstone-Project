/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  fromJS,
  List,
  Map
} from 'immutable'

import {
  SET_CONTROLS
} from '../../../../../src/js/actions/constants'

import reducer, { initialState } from '../../../../../src/js/reducers/current-game'

describe('Controls Reducer', () => {
  it('should have correct initial state', () => {
    expect(initialState.get('controls')).toEqual(fromJS(
      [
        {
          rotateY: 0,
          rotateZ: 0
        },
        {
          rotateY: 0,
          rotateZ: 90
        },
        {
          rotateY: 0,
          rotateZ: 180
        }
      ]
    ))
  })
  it('should return initial State on initialization', () => {
    expect(reducer()).toEqual(initialState)
  })
  it('should return state if no action passed in', () => {
    expect(reducer(initialState)).toEqual(initialState)
    const newState = initialState.setIn(['controls', 0, 'rotateY'], 180)
    expect(reducer(newState).get('controls')).toEqual(fromJS([
      {
        rotateY: 180,
        rotateZ: 0
      },
      {
        rotateY: 0,
        rotateZ: 90
      },
      {
        rotateY: 0,
        rotateZ: 180
      }
    ]))
  })
  it('should return state if unknown action type passed in', () => {
    expect(reducer(initialState, { type: 'TADAAAH' })).toEqual(initialState)
  })
  it('should set correct controls when SET_CONTROLS action received', () => {
    const action = {
      type: SET_CONTROLS,
      payload: List.of(
        Map({
          rotateY: 90,
          rotateZ: 0
        }),
        Map({
          rotateY: 0,
          rotateZ: 90
        }),
        Map({
          rotateY: 180,
          rotateZ: 180
        })
      )
    }
    expect(reducer(initialState, action).get('controls')).toEqual(fromJS(
      [
        {
          rotateY: 90,
          rotateZ: 0
        },
        {
          rotateY: 0,
          rotateZ: 90
        },
        {
          rotateY: 180,
          rotateZ: 180
        }
      ]
    ))
  })
})
