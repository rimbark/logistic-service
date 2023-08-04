import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { currentRouteSlice } from 'reducers/currentRoute.slice'
import { routesSlice } from 'reducers/listOfRoutes.slice'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from 'sagas/index.sagas'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  routes: routesSlice.reducer,
  currentRoute: currentRouteSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
