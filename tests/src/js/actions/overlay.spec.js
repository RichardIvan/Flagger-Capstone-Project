/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  isFSA
} from 'flux-standard-action'

import {
  CLOSE_OVERLAY
} from '../../../../src/js/actions/constants'

import {
  closeOverlay
} from '../../../../src/js/actions/overlay'

describe('Overlay Action Creator', () => {
  it('should return action with correct action type', () => {
    expect(closeOverlay()).toEqual({
      type: CLOSE_OVERLAY
    })
  })

  it('should be FSA', () => {
    expect(isFSA(closeOverlay())).toBe(true)
  })
})
