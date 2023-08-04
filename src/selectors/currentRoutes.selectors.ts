import { RootState } from 'store/store'

export const selectCurrentPoints = (state: RootState) => state.currentRoute.points
export const selectCurrentRoute = (state: RootState) => state.currentRoute.route
