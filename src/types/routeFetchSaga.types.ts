import { Action } from '@reduxjs/toolkit'
import { PointsInfoType } from 'types/route.types'

export interface FetchRouteAction extends Action<'currentRoute/addCurrentPoints'> {
  payload: PointsInfoType[]
}

export interface RouteApiResult {
  routes: {
    geometry: {
      coordinates: number[][]
    }
  }[]
}

export interface ReceivedPointsType {
  data: PointsInfoType[]
}
