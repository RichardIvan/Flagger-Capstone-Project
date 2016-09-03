/* @flow */
'use strict'

var util = require('util')

import { describe, it, beforeEach } from 'mocha'
import expect, { spyOn } from 'expect'

import {
  first,
  has
} from 'lodash'

import { Map } from 'immutable'

import mq from 'mithril-query'

import {
  toggleSounds,
  signIn,
  signOut
} from '../../../../src/js/actions'

import {
  authButtonBySignedInStatus
} from '../../../../src/js/helpers'

import settingsComponent from '../../../../src/js/components/settings'

describe('Settings Component', () => {
  let out
  let vnode
  let checkmarkAttrs
  let onclick

  beforeEach(() => {


    vnode = {
      attrs: {
        state: {
          user: Map({
            isSignedIn: true
          }),
          settings: Map({
            sounds: true
          })
        },
        dispatch(action) {
          console.log(action)
        }
      }
    }
    checkmarkAttrs = {
      onclick: () => vnode.attrs.dispatch(toggleSounds(!false))
    }
    out = mq(settingsComponent, {
      state: {
        user: Map({
          isSignedIn: true
        })
      },
      checkmarkAttrs,
      oauthButton: authButtonBySignedInStatus(vnode.attrs.state)
    })
  })

  it('should have #settings element', () => {
    expect(out.has('#settings')).toBe(true)
  })

  it('should have h2 "Settings"', () => {
    expect(out.has('h2')).toBe(true)
    expect(out.contains('Settings')).toBe(true)
  })

  describe('Sounds label', () => {
    it('should have sounds label', () => {
      expect(out.contains('Sounds')).toBe(true)
    })

    it('should have id for use by aria label-by', () => {
      expect(out.has('label[id=sounds-label]')).toBe(true)
    })
  })


  describe('Checkbox', () => {
    it('should have checkbox', () => {
      expect(out.has('input[type=checkbox]')).toBe(true)
    })

    it('should have be labed by "Sounds Label"', () => {
      expect(out.has('.image_wrapper[aria-label]')).toBe(true)
    })

    it('should have checked attribute', () => {
      expect(has(first(out.find('input[type=checkbox]')), 'checked'))
    })

    it('should have click handler for dispatching the sounds state change', () => {
      const spy = spyOn(checkmarkAttrs, 'onclick')
      out.click('.image_wrapper')
      expect(spy.calls.length).toBe(1)
    })
  })


  describe('Button', () => {
    it('should have button', () => {
      expect(out.has('button.settings#oauth')).toBe(true)
    })
  })

})
