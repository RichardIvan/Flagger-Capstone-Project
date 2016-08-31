/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect, { spyOn } from 'expect'

import mq from 'mithril-query'

import exitGamePromptContainer from '../../../../src/js/containers/ExitGamePrompt'
import exitGamePromptComponent from '../../../../src/js/components/exit-game-prompt'

describe('Exit Game Prompt Component', () => {
  describe('Using Component', () => {
    let out

    let yesSpy
    let naySpy
    let fn = {}
    beforeEach(function () {
      fn.dispatch = function() {}
      yesSpy = spyOn(fn, 'dispatch')
      naySpy = spyOn(fn, 'dispatch')
      out = mq(exitGamePromptComponent, {
        store: {
          'abs': 'efg'
        },
        dispatch: fn.dispatch
      })

    })
    it('should have a #exit-prompt', () => {
      expect(out.has('#exit-prompt')).toBe(true)
    })
    it('should have 2 buttons', () => {
      expect(out.should.have.at.least(2, 'button'))
    })
    describe('Heading', () => {
      it('should be a h2', () => {
        expect(out.has('h2')).toBe(true)
      })
      it('should say "Exit Game?"', () => {
        expect(out.contains('Exit Game?')).toBe(true)
      })
    })
    describe('Buttons container', () => {
      beforeEach(function () {
        fn.dispatch = function() {}
        yesSpy = spyOn(fn, 'dispatch')
        naySpy = spyOn(fn, 'dispatch')
        out = mq(exitGamePromptContainer, {
          store: {
            'abs': 'efg'
          },
          dispatch: fn.dispatch
        })
      })
      it('should have .buttons container', () => {
        expect(out.has('.buttons')).toBe(true)
      })
      describe('Yes BUTTON', () => {
        it('should one button should say Yup', () => {
          expect(out.contains('Yup')).toBe(true)
        })
        it('should dispatch an action on click ', () => {
          out.click('#exit-prompt button:first-child', {
            stopPropagation: () => {}
          })
          expect(yesSpy.calls.length).toBe(1)
          out.click('#exit-prompt button:first-child', {
            stopPropagation: () => {}
          })
          expect(yesSpy.calls.length).toBe(2)
        })
      })
      describe('Nay BUTTON', () => {
        it('should one button should say Nah', () => {
          expect(out.contains('Nah')).toBe(true)
        })
        it('should dispatch an action on click ', () => {
          out.click('#exit-prompt button:last-child', {
            stopPropagation: () => {}
          })
          expect(naySpy.calls.length).toBe(1)
          out.click('#exit-prompt button:last-child', {
            stopPropagation: () => {}
          })
          expect(naySpy.calls.length).toBe(2)
        })
      })
    })

  })
})
