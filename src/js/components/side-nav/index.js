/* @flow */
'use strict'

import m from 'mithril'

const sideNav = {
  view(vnode: Object) {
    return m('#navbar', vnode.attrs.sidenavAttrs,
      m('ul', [
        m('li', vnode.attrs.headingAttrs, 'Guess What?'),
        m('li', vnode.attrs.achievementsAttrs, 'Achievements'),
        m('li', vnode.attrs.highscoresAttrs, 'Highscores'),
        m('li', vnode.attrs.oauthAttrs, vnode.attrs.oauthButtonText)
      ])
    )
  }
}

export default sideNav
