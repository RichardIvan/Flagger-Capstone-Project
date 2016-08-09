/* @flow */
'use strict'

import randomWords from 'random-words'

export function generateShortId() {
  return randomWords({ exactly: 3, join: '-' })
}
