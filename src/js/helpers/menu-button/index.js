/* @flow */
'use strict'

import m from 'mithril'
import randomWords from 'random-words'

import map from 'lodash/map'
import take from 'lodash/take'

import {
  isMobile
} from '../../selectors/mobile-state'

import {
  startGame,
  changeRoute
} from '../../actions/'

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
  PLAYING_SINGLEPLAYER_ROUTE,
  PLAYING_MULTIPLAYER_ROUTE
} from '../../actions/constants'

export function generateShortId() {
  return randomWords({ exactly: 3, join: '-' })
}

export function menuButtonsByRoute(state: Object, dispatch: Object, route: string) {
  return take(map(getAttribuesForMenuButtonsByRoute(dispatch, route), (buttonComponentAttributes: Object) => {
    return m(buttonComponent, buttonComponentAttributes)
  }), isMobile(state) ? 1 : 2 )
}

export function getAttribuesForMenuButtonsByRoute(dispatch: Object, route: string) {
  switch (route) {
    case MENU_ROUTE:
      return mainMenuButtonAttributes(dispatch)
    case MENU_MULTIPLAYER_ROUTE:
      return multiplayerButtonAttributes()
    default:
      return mainMenuButtonAttributes(dispatch)
  }
}

export function mainMenuButtonAttributes(dispatch: any) {
  return [
    {
      buttonText: SINGLE_BUTTON_TEXT,
      buttonAttrs: {
        onclick: () => {
          // m.route.set(PLAYING_SINGLEPLAYER_ROUTE)
          // dispatch(startGame())
          dispatch(changeRoute(PLAYING_SINGLEPLAYER_ROUTE))
        }
      }
    },
    {
      buttonText: MULTI_BUTTON_TEXT,
      buttonAttrs: {
        onclick: () => {
          dispatch(changeRoute(PLAYING_MULTIPLAYER_ROUTE))
        }
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
