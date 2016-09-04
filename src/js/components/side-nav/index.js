/* @flow */
'use strict'

import m from 'mithril'

import styles from './styles.sass'

const sideNav = {
  view(vnode: Object) {
    return m(`#navbar.${styles.navbar}[tabindex=-1]`, vnode.attrs.sidenavAttrs,
      m('ul', [
        m('li', vnode.attrs.headingAttrs, m('span', 'Guess What?')),
        m('li', vnode.attrs.highscoresAttrs, m('span', 'Highscores')),
        m('li', vnode.attrs.oauthAttrs, vnode.attrs.oauthButtonText)
      ])
    )
  }
}

export default sideNav
