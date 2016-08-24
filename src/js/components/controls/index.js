/* @flow */
'use strict'

import m from 'mithril'

const controlsComponent = {
  view(vnode: Object) {
    return m('#controls', m('ul', [
      vnode.attrs.buttons.map(button => m('li', button))
    ]))
  }
}

export default controlsComponent