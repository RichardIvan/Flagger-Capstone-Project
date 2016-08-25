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
  getCoinButtonsStyles,
  isControlsDisabled
} from '../../../../src/js/selectors/controls'

describe('Controls Selector', () => {
  let state = {
    currentGame: Map({
      controls: List.of({one: 'one'}, {two: 'two'}, {three: 'three'})
    })
  }

  it('should return entry within current game > controls', () => {
    expect(getCoinButtonsStyles(state)).toEqual([{one: 'one'}, {two: 'two'}, {three: 'three'}])
  })
})

describe('isControlsDisabled() Selector', () => {
  it('should return correct state', () => {
    const state = {
      componentsState: {
        controlsState: Map({
          disabled: false
        })
      }
    }
    expect(isControlsDisabled(state)).toBe(false)
    const newState = {
      componentsState: {
        controlsState: Map({
          disabled: true
        })
      }
    }
    expect(isControlsDisabled(newState)).toBe(true)
  })
})
