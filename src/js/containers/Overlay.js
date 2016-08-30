/* @flow */
'use strict'

import m from 'mithril'

import overlayComponent from '../components/overlay'

import {
  isOverlayOpen as isOpen
} from '../selectors/overlay'

import {
  closeNavigation
} from '../actions/side-nav'

const overlayContainer = {
  view(vnode) {
    return m(overlayComponent, {
      overlayAttrs: {
        class: isOpen(vnode.attrs.state) ? 'open' : '',
        onclick: () => vnode.attrs.dispatch(closeNavigation())
      }
    })
  }
}

export default overlayContainer
