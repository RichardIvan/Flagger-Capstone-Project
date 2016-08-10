/* @flow */
'use strict'

import m from 'mithril'

import menuContainer from '../../Menu'
// import gameContainer from '../../Game'

import { compact, first } from 'lodash'

import {
  MENU_ROUTE,
  MENU_MULTIPLAYER_ROUTE,
} from '../../../actions/constants'

export function getVisibleContainerByRoute() {
  const route = m.route.get()
  switch (route) {
    case MENU_ROUTE:
    case MENU_MULTIPLAYER_ROUTE:
      return menuContainer
    default:
      return menuContainer
  }
}
