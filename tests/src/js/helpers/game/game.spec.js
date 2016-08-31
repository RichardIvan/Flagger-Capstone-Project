/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import mq from 'mithril-query'
import {
  Map
} from 'immutable'

import {
  generateAnimationSequence,
  constructCoinOverlay
} from '../../../../../src/js/helpers/game'

describe('generateAnimationSequence function', () => {
  it('should return an array', () => {
    expect(generateAnimationSequence(1)).toBeA('array')
  })
  it('should return and array with the same length as number the parameter passed in', () => {
    expect(generateAnimationSequence(1).length).toBe(1)
    expect(generateAnimationSequence(2).length).toBe(2)
    expect(generateAnimationSequence(3).length).toBe(3)
    expect(generateAnimationSequence(4).length).toBe(4)
    expect(generateAnimationSequence(5).length).toBe(5)
  })
  it('should only contain items with rotateZ or rotateY keys', () => {
    generateAnimationSequence(6).forEach(item => {
      const keys = Object.keys(item)
      const key = keys[0]
      const possibleKeys = ['rotateZ', 'rotateY']
      expect(keys.length).toBe(1)
      expect(possibleKeys.indexOf(key)).toNotBe(-1)
    })
  })
})

describe('#constructCoinOverlay() function', () => {
  let out
  const state = {
    componentsState: {
      coinState: Map({
        overlayVisible: true
      })
    }
  }

  beforeEach(function () {
    out = mq(constructCoinOverlay(state))
  })
  it('should return have .coin-overlay', () => {
    expect(out.has('.coin-overlay')).toBe(true)
  })
  it('should have ul', () => {
    expect(out.has('ul')).toBe(true)
  })
  it('should have 4 li', () => {
    expect(out.should.have.at.least.bind(null, 4, 'li')).toNotThrow()
  })
  it('should have visible class when store contains true', () => {
    expect(out.has('.visible')).toBe(true)
  })
  it('should not have visible class when store contains false', () => {
    const newState = {
      componentsState: {
        coinState: Map({
          overlayVisible: false
        })
      }
    }
    expect(mq(constructCoinOverlay(newState)).has('.visible')).toBe(false)
  })
})
