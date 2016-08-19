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
  getCoinButtonsStyles
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
