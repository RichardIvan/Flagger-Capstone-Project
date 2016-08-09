/* @flow */
'use strict'

import m from 'mithril'

import menuComponent from '../components/menu'

const MenuContainer = {
  view (vnode: Object) {
    return m(menuComponent, { ...vnode.attrs })
  }
}

export default MenuContainer
