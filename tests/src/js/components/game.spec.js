/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import gameContainer from '../../../../src/js/containers/Game'
import mq from 'mithril-query'

import {
  Map,
  List
} from 'immutable'

describe('Game Component', () => {
  let out
  let state = {
    componentsState: {
      coinState: Map({
        overlayVisible: true
      }),
      controlsState: Map({
        disabled: true
      })
    },
    currentGame: Map({
      coin: Map({
        translateY: 0
      }),
      controls: List.of(
        Map({
          rotateY: 0,
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
      ),
    })
  }

  beforeEach(function () {
    out = mq(gameContainer, { state })
  })
  // it('should have and Coin showing', () => {
  //   expect(out.should.have.bind(null, '#coin')).toNotThrow()
  // })
  it('should have #controls', () => {
    expect(out.has('#controls')).toBe(true)
  })
})
