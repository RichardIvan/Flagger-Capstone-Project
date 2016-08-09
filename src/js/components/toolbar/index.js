/* @flow */
'use strict'

import m from 'mithril'

import styles from './toolbar-styles.scss'

// TODO write tests for toolbarComponent

const toolbarComponent = {
  view(vnode: Object) {
    return m('#toolbar.toolbar', [
      m('div.icon-holder', vnode.attrs.navigationAttrs, vnode.attrs.navigationIcon),
      m('div.icon-holder', vnode.attrs.settingsAttrs, vnode.attrs.settingsIcon)
    ])
  }
}

export default toolbarComponent
