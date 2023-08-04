import { LatLngExpression } from 'leaflet'

export interface CustomMarkerPropsType {
  item: CustomMarkerItemType
  index?: number
}

export interface CustomMarkerItemType {
  geotag: LatLngExpression | [number, number]
  info: string
}
