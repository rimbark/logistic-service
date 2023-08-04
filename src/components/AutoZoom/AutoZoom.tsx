import { AutoZoomProps } from 'components/AutoZoom/autoZoom.types'
import { latLngBounds } from 'leaflet'
import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

export const AutoZoom = ({ bounds }: AutoZoomProps) => {
  const map = useMap()

  useEffect(() => {
    if (bounds.length === 0) return
    map.fitBounds(latLngBounds(bounds))
  }, [map, bounds])

  return null
}
