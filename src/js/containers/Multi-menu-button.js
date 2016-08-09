/* @flow */
'use strict'

import m from 'mithril'

import menuButtonComponent from '../components/menu-button'
import rightButtonEdgeImage from '../../images/button-right.png'
import leftButtonEdgeImage from '../../images/button-left.png'

// TODO implement menu button event handler

const MultiMenuButton = {
  view() {
    return m(menuButtonComponent, {
      text: 'Multi',
      buttonAttrs: {
        onclick: () => m.route.set('/new-game/multiplayer')
      }
    })
  }
}

export default MultiMenuButton
