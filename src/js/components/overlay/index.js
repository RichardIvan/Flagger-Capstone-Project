/* @flow */
'use strict'

import m from 'mithril'

import './overlay-styles.sass'

const overlayComponent = {
  view(vnode: Object) {
    return m('#overlay', vnode.attrs.overlayAttrs)
  }
}

export default overlayComponent
