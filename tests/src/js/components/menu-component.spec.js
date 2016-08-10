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

    // button should trigger a dispach action of set game mode to single player or something
    // should have a onclick handler
    it('should have a onclick handler', () => {
      output.click()
      expect(flag).toBe(false)
    })

    // button should change the route of the app

  })

  // should display main logo
  describe('Main Logo', () => {
    it('should display main logo', () => {
      expect(output.has('#coin')).toBe(true)
    })

    it('should toggle a front/back class on click', () => {
      expect(output.has('#coin')).toBe(true)
      console.log(output.find('#coin'))
      // expect(output.has('.flipped')).toBe(true)
      output.click('.logo')
      console.log(output.find('.logo div'))
      expect(output.has('.flipped')).toBe(true)
    })
  })
})
