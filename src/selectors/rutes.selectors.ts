import { RootState } from 'store/store'

export const selectRoutes = (state: RootState) => state.routes.routeList
