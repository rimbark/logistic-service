import { LatLngExpression, LatLngTuple } from 'leaflet'

export interface InitialStateType {
  routeList: RouteTypes[]
}

export interface RouteTypes {
  id: number
  pointsInfo: PointsInfoType[]
}

export interface PointsInfoType {
  geotag: LatLngExpression | LatLngTuple
  info: string
}
