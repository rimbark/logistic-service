import { CustomMarkerItemType } from 'components/CustomMarker/customMarker.types'

export const changeArrayToURL = (arr: CustomMarkerItemType[]) => {
  return arr
    .map(item => [(item.geotag as [number, number])[1], (item.geotag as [number, number])[0]])
    .join(';')
}
