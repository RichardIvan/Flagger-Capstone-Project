/* @flow */
'use strict'

import m from 'mithril'

import rootComponent from '../components/root'

import {
  getVisibleContainer
} from './helpers'

const rootContainer = {
  view (vnode: Object) {
    return m(rootComponent, {
      ...vnode.attrs,
      container: m(getVisibleContainer(m.route.get(), vnode.attrs.state), { ...vnode.attrs })
    })
  }
}

export default rootContainer
