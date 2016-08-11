/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import mq from 'mithril-query'

import toolbarComponent from '../../../../src/js/components/toolbar'

import {
  toggleSettingsOpenState
} from '../../../../src/js/actions'

describe('Toolbar Component', () => {
  let output
  let vnode

  beforeEach(() => {
    vnode = {
      attrs: {
        store: ''
      }
    }
    output = mq(toolbarComponent, {
      settingsButtonAttrs: {
        onclick: () => toggleSettingsOpenState(vnode.attrs.store)
      }
    })
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

    // it('should have a click handler', () => {
    //   const onclick = () => toggleSettingsOpenState(vnode.attrs.store)
    //   console.log(output.find('#settings-button')[0].attrs.onclick.toString())
    //   console.log(onclick.toString())
    //   // console.log(onclick == output.find('#settings-button')[0].attrs.onclick)
    //
    //   expect(output.find('#settings-button')[0].attrs.onclick).toEqual(onclick)
    // })
  })
})
