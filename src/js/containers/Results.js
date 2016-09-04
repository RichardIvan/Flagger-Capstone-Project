/* @flow */
'use strict'

import m from 'mithril'

import resultsComponent from '../components/results'

import {
  replayGame,
  exitGame,
  setPlayerName
} from '../actions/game'

import {
  getPlayersScores,
  isNewHighScore
} from '../selectors/game'

const resultsContainer = {
  view(vnode: Object) {
    return m(resultsComponent, {
      ...vnode.attrs,
      scores: m('ul.scores', [
        getPlayersScores(vnode.attrs.state).map((player, index) => {
          return m('li.score-line',
            m('ul.single-user',
              m('li', `P${index + 1}`),
              m('li', m('input[maxlength=3][pattern="[a-zA-Z0-9-]+"]', {
                'aria-label': 'Player Name',
                autofocus: index === 0 ? true : false,
                value: player.name || '???',
                onblur: (e) => vnode.attrs.dispatch(setPlayerName(index, e.target.value || '???'))
              })),
              m('li', m('.score', `${player.score} pt`))
            )
          )
        })
      ]),
      totalPoints: getPlayersScores(vnode.attrs.state)[0],
      replayButton: m('button', {
        onclick: () => vnode.attrs.dispatch(replayGame())
      }, 'Replay!'),
      exitButton: m('button', {
        onclick: () => vnode.attrs.dispatch(exitGame())
      }, 'exit'),
      newHighscore: m('', `${isNewHighScore(vnode.attrs.state) ? 'NEW HIGHSCORE' : ''}`),
      playerNames: m('ul', [
        getPlayersScores(vnode.attrs.state).map((score, index) => {
          return m('ul', m('li', `P${index + 1}`), m('li', ))
        })
      ])
    })
  }
}

export default resultsContainer
