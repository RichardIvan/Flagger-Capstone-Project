/* @flow */
'use strict'

import m from 'mithril'

const coinComponent = {
  view(vnode: Object) {
    return m('.main', {
    } , m('img.logo', vnode.attrs.coinAttrs))
  }
}

export default coinComponent
