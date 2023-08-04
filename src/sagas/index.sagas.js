import { all } from 'redux-saga/effects'
import { routeWatcher } from './route.sagas'

export function* rootWatcher() {
  yield all([routeWatcher()])
}
