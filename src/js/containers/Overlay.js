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
        class: isOpen(vnode.attrs.store.getState()) ? 'open' : '',
        onclick: () => vnode.attrs.store.dispatch(closeNavigation())
      }
    })
  }
}

export default overlayContainer
