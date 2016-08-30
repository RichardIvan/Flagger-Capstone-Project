/* @flow */
'use strict'

import {
  CHANGE_ROUTE
} from '../constants'

export function changeRoute(route: string) {
  return {
    type: CHANGE_ROUTE,
    payload: {
      route: route
    }
  }
}
