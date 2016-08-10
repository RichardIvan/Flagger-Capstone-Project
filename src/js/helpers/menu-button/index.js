/* @flow */
'use strict'

import m from 'mithril'
import randomWords from 'random-words'

import { map } from 'lodash'

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

export function menuButtonsByRoute() {
  return map(getAttribuesForMenuButtonsByRoute(), (buttonComponentAttributes: Object) => {
    return m(buttonComponent, buttonComponentAttributes)
  })
}

export function getAttribuesForMenuButtonsByRoute() {
  const route = m.route.get()
  switch (route) {
    case MENU_ROUTE:
      return mainMenuButtonAttributes()
    case MENU_MULTIPLAYER_ROUTE:
      return multiplayerButtonAttributes()
    default:
      return mainMenuButtonAttributes()
  }
}

export function mainMenuButtonAttributes() {
  return [
    {
      buttonText: SINGLE_BUTTON_TEXT,
      buttonAttrs: {
        onclick: () => m.route.set(PLAYING_SINGLEPLAYER_ROUTE)
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
