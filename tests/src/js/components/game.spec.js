/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import gameContainer from '../../../../src/js/containers/Game'
import mq from 'mithril-query'

describe('Game Component', () => {
  let out
  let store = {
    getState() {
      return 'demo'
    }
  }

  beforeEach(function () {
    out = mq(gameContainer, { store: store })
  })
  it('should have and Coin showing', () => {
    expect(out.should.have.bind(null, '#coin')).toNotThrow()
  })
  it('should have #controls', () => {
    expect(out.has('#controls')).toBe(true)
  })
})
