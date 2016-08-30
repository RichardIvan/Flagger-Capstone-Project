/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  Map
} from 'immutable'

import {
  CHANGE_ROUTE,
  MENU_ROUTE
} from '../../../../../src/js/actions/constants'

import reducer, { initialState } from '../../../../../src/js/reducers/components-state/navigation-component'

describe.only('NAVIGATION COMPOENNT STATE REDUCER', () => {
  let action
  let state
  beforeEach(function () {
    state = Map({
      open: true
    })
    action = {
      type: CHANGE_ROUTE,
      payload: {
        route: MENU_ROUTE
      }
    }
  })
  it('#CHANGE_ROUTE should render open state to false', () => {
    expect(reducer(state, action).get('open')).toBe(false)
  })
})
