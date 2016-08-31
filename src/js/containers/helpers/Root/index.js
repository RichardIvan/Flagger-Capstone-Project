/* @flow */
'use strict'

import m from 'mithril'

import menuContainer from '../../Menu'
import settingsContainer from '../../Settings'
import gameContainer from '../../Game'
import resultsContainer from '../../Results'

import {
  isSettingsComponentOpen as isSettingsOpen
} from '../../../selectors'

import {
  MENU_ROUTE,
  MENU_MULTIPLAYER_ROUTE,
  MULTIPLAYER_HOST_ROUTE,
  MULTIPLAYER_JOIN_ROUTE,
  PLAYING_SINGLEPLAYER_ROUTE,
  PLAYING_MULTIPLAYER_ROUTE,
  RESULTS_ROUTE
} from '../../../actions/constants'

import {
  extractGenericRoute
} from '../../../helpers/application/routing'

export function getVisibleContainer(route: string, state: Object) {
  if (isSettingsOpen(state)) {
    return settingsContainer
  }

  return getVisibleContainerByRoute(route)
}

export function getVisibleContainerByRoute(route: string) {
  switch (extractGenericRoute(route)) {
    case MENU_ROUTE:
    case MENU_MULTIPLAYER_ROUTE:
      return menuContainer
    case PLAYING_SINGLEPLAYER_ROUTE:
    case PLAYING_MULTIPLAYER_ROUTE:
      return gameContainer
    case RESULTS_ROUTE:
      return resultsContainer
    default:
      return menuContainer
  }
}
