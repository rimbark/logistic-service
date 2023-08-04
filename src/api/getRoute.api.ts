import { requestRoute } from 'api/requestRoute.api'
import { changeArrayToURL } from 'helpers/changeArrayToURL.helper'
import { ReceivedPointsType } from 'types/routeFetchSaga.types'

export function getRoute(points: ReceivedPointsType) {
  const routePoints = changeArrayToURL(points.data)
  const urlReqPoints = `/route/v1/driving/${routePoints}?steps=true&geometries=geojson&overview=full&generate_hints=false&skip_waypoints=true`
  return requestRoute(urlReqPoints, 'GET', undefined)
}
