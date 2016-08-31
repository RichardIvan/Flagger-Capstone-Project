/* @flow */
'use strict'

import m from 'mithril'

import styles from './styles.sass'

const exitGamePromptComponent = {
  view(vnode: Object) {
    return m(`#exit-prompt.${styles.container}`, [
      m('h2', 'Exit Game?'),
      m('.buttons', [
        m('button', vnode.attrs.yesButtonAttrs, 'Yup'),
        m('button', vnode.attrs.noButtonAttrs, 'Nah')
      ])
    ])
  }
}

export default exitGamePromptComponent
