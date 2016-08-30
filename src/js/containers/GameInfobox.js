/* @flow */
'use strict'

import m from 'mithril'

import gameInfoboxComponent from '../components/game-infobox'

import {
  isInfoboxVisible,
  getInfoboxText
} from '../selectors'

const gameInfoboxContainer = {
  view(vnode: Object) {
    return m(gameInfoboxComponent, {
      ...vnode.attrs,
      pAttrs: {
        class: isInfoboxVisible(vnode.attrs.state) ? 'showing' : ''
      },
      pText: getInfoboxText(vnode.attrs.state)
    })
  }
}

export default gameInfoboxContainer
