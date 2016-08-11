/* @flow */
'use strict'

import m from 'mithril'

import toolbarComponent from '../components/toolbar'

import hamburgerIcon from '../../images/hamburger-icon.png'
import settingsIcon from '../../images/settings-icon.png'

import {
  toggleSettingsOpenState,
  openNavigation
} from '../actions'

// TODO add attributes
// TODO add click handler for buttons

const toolbarContainer = {
  view(vnode) {
    return m(toolbarComponent, {
      navigationIconAttrs: {
        src: hamburgerIcon
      },
      navigationButtonAttrs: {
        onclick: () => openNavigation(vnode.attrs.store)
      },
      settingsIconAttrs: {
        src: settingsIcon,
      },
      settingsButtonAttrs: {
        onclick: () => toggleSettingsOpenState(vnode.attrs.store)
      }
    })
  }
}

export default toolbarContainer
