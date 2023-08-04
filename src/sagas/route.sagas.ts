import * as routeApi from 'api/getRoute.api'
import { addCurrentRoute } from 'reducers/currentRoute.slice'
import { call, put, takeEvery } from 'redux-saga/effects'
import { FetchRouteAction, RouteApiResult } from 'types/routeFetchSaga.types'

function* fetchRouteWorker(action: FetchRouteAction) {
  const data = action.payload
  const resOSRM: RouteApiResult = yield call(routeApi.getRoute, { data })
  const polylineCoordinates = resOSRM.routes[0].geometry.coordinates
  yield put(addCurrentRoute(polylineCoordinates))
}

export function* routeWatcher() {
  yield takeEvery('currentRoute/addCurrentPoints', fetchRouteWorker)
}
