/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect, { spyOn } from 'expect'

import m from 'mithril'
import mq from 'mithril-query'

import resultsComponent from '../../../../src/js/components/results'

describe('Results Component', () => {
  let out
  let spy
  let spy2
  let fn = {
    dispatch: () => {},
    dispatch2: () => {}
  }

  beforeEach(function () {
    spy = spyOn(fn, 'dispatch')
    spy2 = spyOn(fn, 'dispatch2')
    out = mq(resultsComponent, {
      replayButton: m('button', {
        onclick: () => fn.dispatch()
      }, 'Replay!'),
      exitButton: m('button', {
        onclick: () => fn.dispatch2()
      }, 'exit')
    })
  })
  it('should have a #results id', () => {
    expect(out.has('#results')).toBe(true)
  })
  it('should have a h3 element', () => {
    expect(out.has('h3')).toBe(true)
  })
  it('should contain "Total"', () => {
    expect(out.contains('Total')).toBe(true)
  })
  it('should contain h2', () => {
    expect(out.has('h2')).toBe(true)
  })
  it('should contain 2 buttons', () => {
    expect(out.should.have.at.least.bind(null, 2, 'button')).toNotThrow()
  })
  it('should contain "Replay!"', () => {
    expect(out.contains('Replay!')).toBe(true)
  })
  it('should contain "exit"', () => {
    expect(out.contains('exit')).toBe(true)
  })
  it('replay button should have onclick event handler', () => {
    out.click('button:first-child')
    expect(spy.calls.length).toBe(1)
    out.click('button:first-child')
    expect(spy.calls.length).toBe(2)
  })
  it('exit button should have onclick event handler', () => {
    out.click('button:nth-child(2)')
    expect(spy2.calls.length).toBe(1)
    out.click('button:nth-child(2)')
    expect(spy2.calls.length).toBe(2)
  })
})
