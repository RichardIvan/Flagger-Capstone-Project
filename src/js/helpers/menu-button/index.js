/* @flow */
'use strict'

import m from 'mithril'
import randomWords from 'random-words'

import map from 'lodash/map'

import {
  startGame
} from '../../actions/game'

import buttonComponent from '../../components/menu-button'

import {
  SINGLE_BUTTON_TEXT,
  MULTI_BUTTON_TEXT,
  HOST_BUTTON_TEXT,
  JOIN_BUTTON_TEXT,
  MENU_ROUTE,
  MENU_MULTIPLAYER_ROUTE,
  MULTIPLAYER_HOST_ROUTE,
  MULTIPLAYER_JOIN_ROUTE,
  PLAYING_SINGLEPLAYER_ROUTE
} from '../../actions/constants'

export function generateShortId() {
  return randomWords({ exactly: 3, join: '-' })
}

export function menuButtonsByRoute(store: Object, route: string) {
  return map(getAttribuesForMenuButtonsByRoute(store, route), (buttonComponentAttributes: Object) => {
    return m(buttonComponent, buttonComponentAttributes)
  })
}

export function getAttribuesForMenuButtonsByRoute(store: Object, route: string) {
  switch (route) {
    case MENU_ROUTE:
      return mainMenuButtonAttributes(store)
    case MENU_MULTIPLAYER_ROUTE:
      return multiplayerButtonAttributes()
    default:
      return mainMenuButtonAttributes(store)
  }
}

export function mainMenuButtonAttributes(store: Object) {
  return [
    {
      buttonText: SINGLE_BUTTON_TEXT,
      buttonAttrs: {
        onclick: () => {
          m.route.set(PLAYING_SINGLEPLAYER_ROUTE)
          store.dispatch(startGame())
        }
      }
    },
    {
      buttonText: MULTI_BUTTON_TEXT,
      buttonAttrs: {
        onclick: () => m.route.set(MENU_MULTIPLAYER_ROUTE)
      }
    },
  ]
}

export function multiplayerButtonAttributes() {
  return [
    {
      buttonText: HOST_BUTTON_TEXT,
      buttonAttrs: {
        onclick: () => m.route.set(MULTIPLAYER_HOST_ROUTE)
      }
    },
    {
      buttonText: JOIN_BUTTON_TEXT,
      buttonAttrs: {
        onclick: () => m.route.set(MULTIPLAYER_JOIN_ROUTE)
      }
    },
  ]
}