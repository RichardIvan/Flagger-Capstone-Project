/* @flow */
'use strict'

import m from 'mithril'

import styles from './styles.sass'

const resultsComponent = {
  view(vnode: Object) {
    return m(`#results.${styles['results-container']}`, [
      m(`.${styles.info}`, [
        m('h3', 'Total'),
        vnode.attrs.scores
      ]),
      m('#newHighscore', vnode.attrs.newHighscore),
      // m('#enter-player-names', vnode.attrs.playerNames),
      m(`.${styles.actions}`, [
        vnode.attrs.replayButton,
        vnode.attrs.exitButton
      ])
    ])
  }
}

export default resultsComponent
