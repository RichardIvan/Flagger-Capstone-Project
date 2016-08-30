/* @flow */
'use strict'

import m from 'mithril'

import styles from './toolbar-styles.scss'

import {
  toggleSettingsOpenState
} from '../../actions'

// TODO write tests for toolbarComponent

const toolbarComponent = {
  view(vnode: Object) {
    return m('#toolbar.toolbar', [
      m('div.icon-holder',
        m('button#navigation-button.hamburger-holder',
          vnode.attrs.navigationButtonAttrs,
          m('img', vnode.attrs.leftIcon)
        )
      ),
      m('div.icon-holder',
        m('button#settings-button.circle',
          vnode.attrs.settingsButtonAttrs,
          m('img', vnode.attrs.settingsIconAttrs)
        )
      )
    ])
  }
}

export default toolbarComponent
