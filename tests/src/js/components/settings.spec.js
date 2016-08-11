/* @flow */
'use strict'

var util = require('util')

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

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

import settingsComponent from '../../../../src/js/components/settings'

describe('Settings Component', () => {
  let out

  beforeEach(() => {
    out = mq(settingsComponent, {
      store: {
        getState() {
          return {
            user: Map({
              isSignedIn: true
            })
          }
        }
      }
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
      expect(out.has('input[aria-labelledby=sounds-label]')).toBe(true)
    })

    it('should have checked attribute', () => {
      expect(has(first(out.find('input[type=checkbox]')), 'checked'))
    })

    it('should have click handler for dispatching the sounds state change', () => {
      const vnode = {
        attrs: {
          store: {
            getState() {
              return {
                user: Map({
                  isSignedIn: true
                })
              }
            }
          }
        }
      }
      const onclick = () => toggleSounds(vnode.attrs.store)

      expect(out.find('input[type=checkbox]')[0].attrs.onclick).toEqual(onclick)
    })
  })


  describe('Button', () => {
    it('should have correct button event handler', () => {
        const store = {
          getState() {
            return {
              user: Map({
                isSignedIn: true
              })
            }
          }
        }

        const isSignedIn = true
        const onclick = () => isSignedIn ? signOut(store) : signIn(store)

        expect(out.find('button.settings#oauth]')[0].attrs.onclick).toEqual(onclick)
    })

    it('should have button', () => {
      expect(out.has('button.settings#oauth')).toBe(true)
    })
  })

})
