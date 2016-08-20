/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  generateAnimationSequence
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
    console.log(generateAnimationSequence(6))
  })
})
