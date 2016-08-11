/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import { has } from 'lodash'

import mq from 'mithril-query'
import m from 'mithril'

import menuComponent from '../../../../src/js/components/menu'

describe('Menu Component', () => {
  let output
  let flag = false
  let burgerFlag = false

  beforeEach(() => {
    output = mq(
      {
        view() {
          return m(menuComponent, {
            componentAttrs: {
              onclick() {
                flag = true
              }
            }
          })
        }
      }
    )
  })

  it('should be a mithril compoenent', () => {
    expect(has(mq(menuComponent).rootNode, 'tag')).toBe(true)
    // expect(mq.bind(null, menuComponent)).toNotThrow()
  })
    // should state signle and multi
  describe('Buttons', () => {
    it('should be 2 buttons', () => {
      expect(output.should.have.at.least.bind(null, 2, 'button')).toNotThrow
    })

    it('should display a button with the single text on it', () => {
      expect(output.contains('Single')).toBe(true)
    })

    it('should display a button with the multi text on it', () => {
      expect(output.contains('Multi')).toBe(true)
    })

  })

  // should display main logo
  describe('Main Logo', () => {
    it('should display main logo', () => {
      expect(output.has('#coin')).toBe(true)
    })
  })
})
