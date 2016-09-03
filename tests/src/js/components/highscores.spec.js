/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import mq from 'mithril-query'

import {
  List,
  Map
} from 'immutable'

import {
  getHighscores
} from '../../../../src/js/selectors/highscores'

import HighscoreComponent from '../../../../src/js/components/highscores'

describe.only('Highscore Component', () => {
  let out
  let state

  beforeEach(function () {
    state = {
      highscores: List.of(
        Map({
          id: 1,
          name: 'SAD',
          score: 111
        }),
        Map({
          id: 1,
          name: 'SAD',
          score: 111
        }),
        Map({
          id: 1,
          name: 'SAD',
          score: 111
        })
      )
    }
    out = mq(HighscoreComponent, {
      state,
      highscores: getHighscores(state)
    })
  })
  it('should have an H2', () => {
    expect(out.has('h2')).toBe(true)
  })
  it('should contain "Highscores"', () => {
    expect(out.contains('Highscores')).toBe(true)
  })
  it('should have ul', () => {
    expect(out.has('ul')).toBe(true)
  })
  it('should contain number of LIs according to the state', () => {
    expect(out.should.have.at.least.bind(null, 4,'ul')).toNotThrow()
  })
  it('should contain number of LIs according to the state', () => {
    expect(out.should.have.at.least.bind(null, 4,'ul')).toNotThrow()
  })
  it('should have the correct number of li elements', () => {
    expect(out.should.have.at.least.bind(null, 9,'li')).toNotThrow()
  })
})
