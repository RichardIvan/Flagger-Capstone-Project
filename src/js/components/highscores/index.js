/* @flow */
'use strict'

import m from 'mithril'

import styles from './styles.sass'

const HighscoreComponent = {
  view(vnode: Object) {
    return m('#highscores', vnode.attrs.highscoresAttrs, [
      m('h2', 'Highscores'),
      m(`ul.${styles['highscores-list']}`, vnode.attrs.highscores.map(entry => m('li.row', m(`ul.${styles['single-highscore']}`, [
        m('li', `${entry.name || '???'}`),
        m('li', [`${entry.score}`, m('span', 'pts')])
      ]))))
    ])
  }
}

export default HighscoreComponent
