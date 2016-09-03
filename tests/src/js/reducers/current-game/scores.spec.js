/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  fromJS,
  Map,
  List
} from 'immutable'

import {
  NEW_SINGLE_PLAYER_GAME,
  SAVE_ROUND_RESULT
} from '../../../../../src/js/actions/constants'

import reducer, { initialState } from '../../../../../src/js/reducers/current-game'

describe('Scores Reducer', () => {
  it('should have initial state with at least one player in the List', () => {
    it('should have initial state with at least one player in the list', () => {
      expect(reducer().getIn(['scores', 'players']).count()).toBe(1)
    })
  })
  it('should return initial state when no state passed in', () => {
    expect(reducer()).toEqual(initialState)
  })
  it('should return initial state when no action passed in', () => {
    expect(reducer(initialState)).toEqual(initialState)
  })
  it('should return state if no action passed in', () => {
    const state = Map({
      hey: 'ho'
    })
    const newState = reducer(state)
    expect(newState).toEqual(fromJS({
      hey: 'ho'
    }))
  })
  it('should return state if no recognized action.type is passed in', () => {
    const state = Map({
      hey: 'ho'
    })
    const newState = reducer(state, { type: 'DUNNO'})
    expect(newState).toEqual(fromJS({
      hey: 'ho'
    }))
  })
  it('should have at least one player entry on NEW_SINGLE_PLAYER_GAME action received', () => {
    const action = {
      type: NEW_SINGLE_PLAYER_GAME,
      payload: {
        player_id: 'uniqueid'
      }
    }
    const newState = reducer(initialState, action)
    expect(newState.get('scores').count()).toBeGreaterThan(0)
  })
  describe('#SAVE_ROUND_RESULT action type', () => {
    it('should add correct number of poitns to player 1', () => {
      const state = Map({
        scores: List.of(Map({
            name: 'ASDF',
            score: 0
          }),
          Map({
            name: 'ASDF',
            score: 10
          })
        ),
        gameInfobox: Map({
          visible: false,
          text: ''
        }),
        level: 1
      })
      const action = {
        type: SAVE_ROUND_RESULT,
        payload: {
          points: 30
        }
      }
      expect(reducer(state, action).getIn(['scores', '0', 'score'])).toBe(30)
    })
  })
})
