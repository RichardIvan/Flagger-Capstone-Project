/* @flow */
'use strict'

import m from 'mithril'

import styles from './styles.sass'

const resultsComponent = {
  view(vnode: Object) {
    return m(`#results.${styles['results-container']}`, [
      m(`.${styles.info}`, [
        m('h3', 'Total'),
        m('h2', `${vnode.attrs.totalPoints}pt`),
      ]),
      m(`.${styles.actions}`, [
        vnode.attrs.replayButton,
        vnode.attrs.exitButton
      ])
    ])
  }
}

export default resultsComponent
