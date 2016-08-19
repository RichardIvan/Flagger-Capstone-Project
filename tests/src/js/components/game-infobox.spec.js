/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import mq from 'mithril-query'

import {
  Map
} from 'immutable'

import gameInfoboxContainer from '../../../../src/js/containers/GameInfobox'
import gameInfoboxComponent from '../../../../src/js/components/game-infobox'

describe('Game Infobox Component', () => {
  let out

  beforeEach(function () {
    out = mq(gameInfoboxComponent)
  })
  it('should display #game-infobox', () => {
    expect(out.has('#game-infobox')).toBe(true)
  })
  it('should have a p element', () => {
    expect(out.has('p')).toBe(true)
  })

  describe('When passed attributes', () => {
    let out

    beforeEach(function () {
      out = mq(gameInfoboxComponent, {
        pText: 'heyho',
        pAttrs: {
          class: 'showing'
        }
      })
    })
    it('should display correct text by using pText', () => {
      expect(out.contains('heyho')).toBe(true)
    })
    it('should have showing class when showing class passed in', () => {
      expect(out.has('.showing')).toBe(true)
    })
  })

  describe('Test via container', () => {
    let out
    const state = {
      'currentGame': Map({
        gameInfobox: Map({
          visible: true,
          text: '3'
        })
      })
    }
    let attrs = {
      store: {
        getState: () => {
          return state
        }
      }
    }

    beforeEach(function () {
      out = mq(gameInfoboxContainer, { store: attrs.store })
    })
    it('should have class showing according to the store', () => {
      expect(out.has('.showing')).toBe(true)

      const newState = {
        currentGame: Map({
          gameInfobox: Map({
            visible: false,
            text: '3'
          })
        })
      }
      const store = {
        getState: () => {
          return newState
        }
      }
      const newOut = mq(gameInfoboxContainer, { store })
      expect(newOut.has('.showing')).toBe(false)
    })
    it('should have text according to the store', () => {
      expect(out.contains('3')).toBe(true)
      const newState = {
        // ...state,
        currentGame: Map({
          gameInfobox: Map({
            visible: false,
            text: 'yahoo!'
          })
        })
      }
      const store = {
        getState: () => {
          return newState
        }
      }
      const newOut = mq(gameInfoboxContainer, { store })
      expect(newOut.contains('yahoo!')).toBe(true)
    })
  })
})
