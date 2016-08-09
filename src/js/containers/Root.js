/* @flow */
'use strict'

import m from 'mithril'

import rootComponent from '../components/root'

import {
  getVisibleContainerByRoute
} from './helpers'

const rootContainer = {
  view (vnode: Object) {
    return m(rootComponent, {
      ...vnode.attrs,
      container: m(getVisibleContainerByRoute(), { ...vnode.attrs })
    })
  }
}

export default rootContainer
