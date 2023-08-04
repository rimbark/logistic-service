import { AutoZoom } from 'components/AutoZoom/AutoZoom'
import { CustomMarker } from 'components/CustomMarker/CustomMarker'
import { CustomMarkerItemType } from 'components/CustomMarker/customMarker.types'
import { useAppSelector } from 'hooks/redux'
import { latLngBounds, LatLngExpression } from 'leaflet'
import React from 'react'
import { MapContainer, Polyline, TileLayer, ZoomControl } from 'react-leaflet'
import { selectCurrentPoints, selectCurrentRoute } from 'selectors/currentRoutes.selectors'
import { PointsInfoType } from 'types/route.types'

export const Map = () => {
  const currentPoints = useAppSelector(selectCurrentPoints)
  const currentStateRoute = useAppSelector(selectCurrentRoute)
  const markerArr: LatLngExpression[] = currentPoints.map((item: PointsInfoType) => item.geotag)
  const greenOptions = { color: '#3705ec' }
  const position: LatLngExpression | undefined = [59.95, 30.3]

  return (
    <MapContainer
      bounds={latLngBounds(markerArr)}
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {currentPoints.map((item: CustomMarkerItemType, index) => (
        <CustomMarker key={item.info} item={item} index={index} />
      ))}
      <Polyline pathOptions={greenOptions} positions={currentStateRoute} />
      <ZoomControl position='bottomright' />
      <AutoZoom bounds={markerArr} />
    </MapContainer>
  )
}
