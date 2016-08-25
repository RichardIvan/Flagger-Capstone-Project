/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  List,
  Map
} from 'immutable'

import {
  includes,
  isEqual
} from 'lodash'

import mq from 'mithril-query'

import controlsComponent from '../../../../src/js/components/controls'
import controlsContainer from '../../../../src/js/containers/Controls'
import coinContainer from '../../../../src/js/containers/Coin'

describe('Game Controls Component', () => {
  describe('Structure', () => {
    let out


    beforeEach(function () {
      out = mq(controlsComponent, {
        buttons: new Array(3).fill({})
      })
    })

    it('should have #controls', () => {
      expect(out.has('#controls')).toBe(true)
    })

    it('should have ul', () => {
      expect(out.has('ul')).toBe(true)
    })

    it('should have 3 li', () => {
      expect(out.should.have.at.least.bind(null, 3, 'li')).toNotThrow()
    }),

    describe('Using ControlsContainer', () => {
      let out
      let store = {
        getState: () => {
          return {
            currentGame: Map({
              controls: List.of(
                Map(
                  {
                    rotateY: 0,
                    rotateZ: 0
                  }
                ),
                Map(
                  {
                    rotateY: 90,
                    rotateZ: 0
                  }
                ),
                Map(
                  {
                    rotateY: 180,
                    rotateZ: 0
                  }
                )
              )
            })
          }
        }
      }

      beforeEach(function () {
        out = mq(controlsContainer, {
          store
        })
      })
      it('all 3 li should contain .coin', () => {
        expect(out.should.have.at.least.bind(null, 3, '.coin')).toNotThrow()
        expect(out.should.have.at.least.bind(null, 4, '.coin')).toThrow()
      })

      it('controls should have correct coin styles', () => {
        const styleValues = [
          {
            rotateY: 0,
            rotateZ: 0
          },
          {
            rotateY: 90,
            rotateZ: 0
          },
          {
            rotateY: 180,
            rotateZ: 0
          }
        ]
        const LIs = out.find('li')
        const coinAttributes = LIs.map(child => child.children[0].attrs.coinAttrs.style)
        coinAttributes.map((styleAttribute, index) => {
          const attrs = styleValues[index]
          const currentTransform = `rotateY(${attrs.rotateY}deg) rotateZ(${attrs.rotateZ}deg)`

          expect(isEqual(styleAttribute.transform, currentTransform)).toBe(true)
        })
      })
    })
    describe.only('controls overlay', () => {
      let out
      let store

      beforeEach(function () {
        store = {
          getState: () => {
            return {
              componentsState: {
                controlsState: Map({
                  disabled: true
                })
              },
              currentGame: Map({
                controls: List.of(
                  Map(
                    {
                      rotateY: 0,
                      rotateZ: 0
                    }
                  ),
                  Map(
                    {
                      rotateY: 90,
                      rotateZ: 0
                    }
                  ),
                  Map(
                    {
                      rotateY: 180,
                      rotateZ: 0
                    }
                  )
                )
              })
            }
          }
        }
        out = mq(controlsContainer, {
          store
        })
      })
      it('should have .disabled', () => {
        // console.log(out)
        // expect(out.should.have.at.least.bind(null, 3, '.disabled')).toNotThrow()
      })
    })
  })
})
