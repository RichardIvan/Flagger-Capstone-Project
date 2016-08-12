/* @flow */
'use strict'

import {
  CLOSE_SIDENAV,
  OPEN_NAVIGATION
} from '../constants'

export function closeSideNav() {
  return {
    type: CLOSE_SIDENAV
  }
}

export function openNavigation() {
  return {
    type: OPEN_NAVIGATION
  }
}
