import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InitialStateType, RouteTypes } from 'types/route.types'

const initialState: InitialStateType = {
  routeList: [
    {
      id: 1,
      pointsInfo: [
        {
          geotag: [59.84660399, 30.29496392],
          info: 'Начало маршрута',
        },
        {
          geotag: [59.82934196, 30.42423701],
          info: 'Остановка',
        },
        {
          geotag: [59.83567701, 30.38064206],
          info: 'Пункт назначения',
        },
      ],
    },
    {
      id: 2,
      pointsInfo: [
        {
          geotag: [59.82934196, 30.42423701],
          info: 'Начало маршрута',
        },
        {
          geotag: [59.82761295, 30.41705607],
          info: 'Остановка',
        },
        {
          geotag: [59.84660399, 30.29496392],
          info: 'Пункт назначения',
        },
      ],
    },
    {
      id: 3,
      pointsInfo: [
        {
          geotag: [59.83567701, 30.38064206],
          info: 'Начало маршрута',
        },
        {
          geotag: [59.84660399, 30.29496392],
          info: 'Остановка',
        },
        {
          geotag: [59.82761295, 30.41705607],
          info: 'Пункт назначения',
        },
      ],
    },
  ],
}

export const routesSlice = createSlice({
  name: 'routesList',
  initialState,
  reducers: {
    addRoute: (state, action: PayloadAction<RouteTypes>) => {
      state.routeList.push(action.payload)
    },
  },
})

export const { addRoute } = routesSlice.actions
