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
      navigationIcon: m('button.hamburger-holder',
        m('img', {
          src: hamburgerIcon
        })
      ),
      navigationAttrs: {

      },
      settingsIcon: m('button.circle',
        m('img', {
          src: settingsIcon,
        })
      ),
      settingsAttrs: {

      }
    })
  }
}

export default toolbarContainer
