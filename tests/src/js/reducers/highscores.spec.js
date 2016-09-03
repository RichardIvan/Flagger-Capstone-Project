/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  INITIAL_HIGHSCORES_LOAD
} from '../../../../src/js/actions/constants'

import {
  List,
  Map,
  fromJS
} from 'immutable'

import reducer, { initialState } from '../../../../src/js/reducers/highscores'

describe('Highscores Reducer', () => {
  it('should return a List', () => {
    expect(reducer()).toBeA(List)
  })
  describe('ACTIONS', () => {
    it('#INITIAL_HIGHSCORES_LOAD should replace current state', () => {
      const action = {
        type: INITIAL_HIGHSCORES_LOAD,
        payload: {
          highscores: [
            {
              id: 1,
              name: 'RIA',
              score: 1024
            },
            {
              id: 2,
              name: 'MIA',
              score: 512
            }
          ]
        }
      }
      expect(reducer(initialState, action)).toEqual(fromJS(
        [
          {
            id: 1,
            name: 'RIA',
            score: 1024
          },
          {
            id: 2,
            name: 'MIA',
            score: 512
          }
        ]
      ))
    })
  })
})
