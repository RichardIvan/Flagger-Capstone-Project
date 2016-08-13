/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  isOverlayOpen
} from '../../../../src/js/selectors/overlay'

import {
  Map
} from 'immutable'

describe('Overlay Selector', () => {
  let state

  beforeEach(function () {
    state = {
      componentsState: {
        overlayState: Map({
          open: false
        })
      }
    }
  })
  it('should return false if overlay open state is false', () => {
    expect(isOverlayOpen(state)).toBe(false)
  })

  it('should return true if overlay open state is true', () => {
    state.componentsState.overlayState = state.componentsState.overlayState.set('open', true)
    expect(isOverlayOpen(state)).toBe(true)
  })
})
