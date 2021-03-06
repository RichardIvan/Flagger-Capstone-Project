/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect, { spyOn } from 'expect'

import {
  Map
} from 'immutable'

import {
  isUserSignedIn as isSignedIn
} from '../../../../src/js/selectors/user'

import m from 'mithril'
import mq from 'mithril-query'

import navbarComponent from '../../../../src/js/components/side-nav'
import navbarContainer from '../../../../src/js/containers/SideNav'

import {
  isNavigationComponentOpen as isNavbarOpen
} from '../../../../src/js/selectors/navigation'

describe('Side Component', () => {
  let out
  let vnode
  let openFlag = false
  let state


  beforeEach(function () {
    state = {
      componentsState: {
        navigationState: Map({
          open: openFlag
        })
      },
      user: Map({
        isSignedIn: true
      })
    }
    vnode = {
      attrs: {
        store: {
          getState() {
            return state
          },
          dispatch() {
            return true
          }
        }
      }
    }
    out = mq(navbarComponent, {
      sidenavAttrs: {
        class: isNavbarOpen(vnode.attrs.store.getState()) ? 'open' : ''
      },
      oauthAttrs: {
        onclick: () => {}
      },
      oauthButtonText: isSignedIn(vnode.attrs.store.getState()) ? 'Log Out' : 'Sign In'
    })
  })


  describe('Structure', () => {
    it('should have #navbar', () => {
      expect(out.has('#navbar')).toBe(true)
    })

    it('should have ul', () => {
      expect(out.has('ul')).toBe(true)
    })

    it('should should have 3 li', () => {
      expect(out.should.have.at.least.bind(null, 3, 'li')).toNotThrow()
    })
  })

  describe('Contents', () => {
    it('has Title', () => {
      expect(out.contains('Guess What?')).toBe(true)
    })

    it('should contain Highscores', () => {
      expect(out.contains('Highscores')).toBe(true)
    })

    it('should contain Log Out', () => {
      expect(out.contains('Log Out')).toBe(true)
    })
  })

  describe('Behavior', () => {
    it('should not have open class initially', () => {
      expect(out.has('.open')).toBe(false)
    })

    it('should have open class based on store entry', () => {
      // stub store
      state.componentsState.navigationState = state.componentsState.navigationState.set('open', true)
      out = mq(navbarComponent, {
        sidenavAttrs: {
          class: isNavbarOpen(vnode.attrs.store.getState()) ? 'open' : ''
        }
      })
      expect(out.has('.open')).toBe(true)
    })

    it('should guess what heading should have click handler', () => {
      let headingEventHandler = {
        onclick: () => {}
      }

      const spy = spyOn(headingEventHandler, 'onclick')

      out = mq(navbarComponent, {
        headingAttrs: {
          onclick: headingEventHandler['onclick']
        },
      })

      out.click('ul > li:first-child')

      expect(spy.calls.length).toBe(1)
    })

    it('Highscores should have click handler', () => {
      let headingEventHandler = {
        onclick: () => {}
      }

      const spy = spyOn(headingEventHandler, 'onclick')

      out = mq(navbarComponent, {
        highscoresAttrs: {
          onclick: headingEventHandler['onclick']
        },
      })

      out.click('li:nth-child(2)', {})
      expect(spy.calls.length).toBe(1)
    })

    it('Logout/Sign In should have click handler', () => {
      let headingEventHandler = {
        onclick: () => {}
      }

      const spy = spyOn(headingEventHandler, 'onclick')

      out = mq(navbarComponent, {
        oauthAttrs: {
          onclick: headingEventHandler['onclick']
        }
      })

      out.click('li:nth-child(3)')
      expect(spy.calls.length).toBe(1)
    })
  })

  describe('ARIA', () => {
    // let isNavbarOpen
    describe('Open Navigation', () => {
      // let out
      let vnode = {
        attrs: {
          store: {
            getState: () => {
              return {
                componentsState: {
                  navigationState: Map({
                    open: true
                  })
                }
              }
            }
          }
        }
      }

      beforeEach(function () {
        out = mq(navbarComponent, {
          ...vnode.attrs,
          headingAttrs: {
            tabindex: isNavbarOpen(vnode.attrs.store.getState()) ? 0 : -1
          },
          highscoresAttrs: {
            tabindex: isNavbarOpen(vnode.attrs.store.getState()) ? 0 : -1
          },
          oauthAttrs: {
            tabindex: isNavbarOpen(vnode.attrs.store.getState()) ? 0 : -1
          }
        })
      })

      it('all 3 items in nav-bar should have tabindex 0', () => {
        expect(out.find('ul > li:first-child')[0].attrs.tabindex).toBe(0)
        expect(out.find('ul > li:nth-child(2)')[0].attrs.tabindex).toBe(0)
        expect(out.find('ul > li:nth-child(3)')[0].attrs.tabindex).toBe(0)
      })
    })

    describe('Closed Navigation', () => {
      let vnode = {
        attrs: {
          store: {
            getState: () => {
              return {
                componentsState: {
                  navigationState: Map({
                    open: false
                  })
                }
              }
            }
          }
        }
      }

      beforeEach(function () {
        out = mq(navbarComponent, {
          ...vnode.attrs,
          headingAttrs: {
            tabindex: isNavbarOpen(vnode.attrs.store.getState()) ? 0 : -1
          },
          highscoresAttrs: {
            tabindex: isNavbarOpen(vnode.attrs.store.getState()) ? 0 : -1
          },
          oauthAttrs: {
            tabindex: isNavbarOpen(vnode.attrs.store.getState()) ? 0 : -1
          }
        })
      })

      it('all 3 items in nav-bar should have tabindex -1', () => {
        expect(out.find('ul > li:first-child')[0].attrs.tabindex).toBe(-1)
        expect(out.find('ul > li:nth-child(2)')[0].attrs.tabindex).toBe(-1)
        expect(out.find('ul > li:nth-child(3)')[0].attrs.tabindex).toBe(-1)
      })
    })
  })
})
