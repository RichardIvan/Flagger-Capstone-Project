/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  extractGenericRoute
} from '../../../../../src/js/helpers/application/routing'

describe.only('Component Routing Helper', () => {
  it('should return "/menu" if this route passed in', () => {
    expect(extractGenericRoute('/menu')).toBe('/menu')
  })

  it('should return "/menu/multiplayer" if this route passed in', () => {
    expect(extractGenericRoute('/menu/multiplayer')).toBe('/menu/multiplayer')
  })

  it('should return "/menu/multiplayer/host" if this route passed in', () => {
    expect(extractGenericRoute('/menu/multiplayer/host')).toBe('/menu/multiplayer/host')
  })

  it('should return "/menu/multiplayer/join" if this route passed in', () => {
    expect(extractGenericRoute('/menu/multiplayer/join')).toBe('/menu/multiplayer/join')
  })

  it('should return "/playing/single-player" if this route passed in', () => {
    expect(extractGenericRoute('/playing/single-player')).toBe('/playing/single-player')
  })

  it('should return "/playing/multiplayer-player" if "/playing/multiplayer-player/customID" passed in', () => {
    expect(extractGenericRoute('/playing/multiplayer-player/customID')).toBe('/playing/multiplayer-player')
  })

  it('should return "/menu" if unrecognized route passed in', () => {
    expect(extractGenericRoute('/asdf')).toBe('/menu')
  })
})
