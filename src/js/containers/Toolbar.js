/* @flow */
'use strict'

import m from 'mithril'

import toolbarComponent from '../components/toolbar'

import hamburgerIcon from '../../images/hamburger-icon.png'
import settingsIcon from '../../images/settings-icon.png'

// TODO add attributes
// TODO add click handler for buttons

const toolbarContainer = {
  view() {
    return m(toolbarComponent, {
      navigationIconAttrs: {
        src: hamburgerIcon
      },
      navigationButtonAttrs: {
        src: hamburgerIcon
      },
      settingsIconAttrs: {
        src: settingsIcon,
      },
      settingsButtonAttrs: {

      }
    })
  }
}

export default toolbarContainer
