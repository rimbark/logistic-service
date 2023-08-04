import { CustomMarkerPropsType } from 'components/CustomMarker/customMarker.types'
import marker from 'images/pngwing.png'
import { Icon } from 'leaflet'
import React from 'react'
import { Marker, Popup } from 'react-leaflet'

export const CustomMarker = ({ item }: CustomMarkerPropsType) => {
  const customIcon = new Icon({
    iconUrl: marker,
    iconSize: [32, 32],
  })

  return (
    <Marker position={item.geotag} icon={customIcon}>
      <Popup>{item.info}</Popup>
    </Marker>
  )
}
