/* @flow */
'use strict'

export function isNavigationComponentOpen(store) {
    return store.getState().componentsState.navigationState.get('open')
}
