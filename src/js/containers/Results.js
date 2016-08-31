/* @flow */
'use strict'

import m from 'mithril'

import resultsComponent from '../components/results'

import {
  replayGame,
  exitGame
} from '../actions/game'

import {
  getPlayersScores
} from '../selectors/game'

const resultsContainer = {
  view(vnode: Object) {
    return m(resultsComponent, {
      ...vnode.attrs,
      totalPoints: getPlayersScores(vnode.attrs.state)[0],
      replayButton: m('button', {
        onclick: () => vnode.attrs.dispatch(replayGame())
      }, 'Replay!'),
      exitButton: m('button', {
        onclick: () => vnode.attrs.dispatch(exitGame())
      }, 'exit')
    })
  }
}

export default resultsContainer
