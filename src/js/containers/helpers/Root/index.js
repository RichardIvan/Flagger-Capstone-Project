/* @flow */
'use strict'

import m from 'mithril'

import menuContainer from '../../Menu'
import settingsContainer from '../../Settings'
// import gameContainer from '../../Game'

import { compact, first } from 'lodash'

import {
  isSettingsComponentOpen as isSettingsOpen
} from '../../../selectors'

import {
  MENU_ROUTE,
  MENU_MULTIPLAYER_ROUTE,
} from '../../../actions/constants'

export function getVisibleContainer(store: Object) {
  const state = store.getState()

  if (isSettingsOpen(state)) {
    return settingsContainer
  }

  return getVisibleContainerByRoute()
}

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
