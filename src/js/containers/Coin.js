/* @flow */
'use strict'

import m from 'mithril'

import coinComponent from '../components/coin'
import image from '../../images/coin-front.png'

const CoinContainer = {
  view() {
    return m(coinComponent, {
      coinAttrs: {
        onclick: () => console.log('hey'),
        src: image
      }
    })
  }
}

export default CoinContainer
