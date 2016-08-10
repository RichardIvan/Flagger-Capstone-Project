/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import mq from 'mithril-query'

import toolbarContainer from '../../../../src/js/components/toolbar'

describe('Toolbar Component', () => {
  let output

  beforeEach(() => {
    output = mq(toolbarContainer)
  })
  // should display hamburger icon
    // shoudl have onclick handler
  describe('Hamburger Icon', () => {
    it('should display hanburger icon', () => {
      expect(output.has('#navigation-button')).toBe(true)
      expect(output.has('button#navigation-button')).toBe(true)
    })
  })

  // should display settings icon
    // should have onclick handler
  describe('Settings Icon', () => {
    it('should display settings icon', () => {
      expect(output.has('#settings-button')).toBe(true)
      expect(output.has('button#settings-button')).toBe(true)
    })
  })
})
