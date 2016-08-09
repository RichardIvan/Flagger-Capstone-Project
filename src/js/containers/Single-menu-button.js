/* @flow */
'use strict'

import m from 'mithril'

import menuButtonComponent from '../components/menu-button'

import {
  generateShortId
} from '../helpers/menu-button'

// TODO implement menu button event handler \
// this is via a function that is being passed a type

const SingleMenuButton = {
  view(vnode: Object) {
    return m(menuButtonComponent, {
      text: 'Single',
      buttonAttrs: {
        onclick: () => m.route.set(`/playing/single-player/${generateShortId()}`)
      }
    })
  }
}

export default SingleMenuButton
