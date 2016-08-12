/* @flow */
'use strict'

import {
  OPEN_NAVIGATION,
  CLOSE_NAVIGATION
} from '../constants'

export function openNavigation() {
  return {
    type: OPEN_NAVIGATION
  }
}

export function closeNavigation() {
  return {
    type: CLOSE_NAVIGATION
  }
}
