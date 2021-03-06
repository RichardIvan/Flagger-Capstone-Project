/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  Map,
  List
} from 'immutable'

import mq from 'mithril-query'

import toolbarComponent from '../../../../src/js/components/toolbar'
import toolbarContainer from '../../../../src/js/containers/Toolbar'

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

  describe('ARIA', () => {
    describe('SIDENAV OPEN', () => {
      let state
      let out

      beforeEach(function () {
        state = {
          componentsState: {
            navigationState: Map({
              open: true
            }),
            settingsState: Map({
              open: true
            })
          },
          currentGame: Map({
            gameStatus: 'playing',
            scores: List.of(0)
          })
        }
        out = mq(toolbarContainer, {
          state
        })
      })
      describe('Settings Icon', () => {
        it('should have tabindex -1', () => {
          expect(out.find('button#settings-button')[0].attrs.tabIndex).toBe(-1)
        })
      })
      describe('Navigation Icon', () => {
        it('should have tabindex -1', () => {
          expect(out.find('button#navigation-button.hamburger-holder')[0].attrs.tabIndex).toBe(-1)
        })
      })
    })

    describe('SIDENAV CLOSED', () => {
      let state
      let out

      beforeEach(function () {
        state = {
          componentsState: {
            navigationState: Map({
              open: false
            }),
            settingsState: Map({
              open: true
            })
          },
          currentGame: Map({
            gameStatus: 'playing',
            scores: List.of(0)
          })
        }
        out = mq(toolbarContainer, {
          state
        })
      })
      describe('Settings Icon', () => {
        it('should have tabindex 0', () => {
          expect(out.find('button#settings-button')[0].attrs.tabIndex).toBe(0)
        })
      })
      describe('Navigation Icon', () => {
        it('should have tabindex 0', () => {
          expect(out.find('button#navigation-button.hamburger-holder')[0].attrs.tabIndex).toBe(0)
        })
      })
    })

  })
})
