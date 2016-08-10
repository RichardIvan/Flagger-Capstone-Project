/* @flow */
'use strict'

import m from 'mithril'

import styles from './toolbar-styles.scss'

// TODO write tests for toolbarComponent

const toolbarComponent = {
  view(vnode: Object) {
    return m('#toolbar.toolbar', [
      m('div.icon-holder', m('button#navigation-button.hamburger-holder',
        m('img', vnode.attrs.navigationIconAttrs)
      )),
      m('div.icon-holder', m('button#settings-button.circle',
        m('img', vnode.attrs.settingsIconAttrs)
      ))
    ])
  }
}

export default toolbarComponent
