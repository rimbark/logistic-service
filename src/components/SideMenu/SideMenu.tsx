import { Layout, Menu } from 'antd'
import { useAppSelector } from 'hooks/redux'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addCurrentPoints } from 'reducers/currentRoute.slice'
import { selectRoutes } from 'selectors/rutes.selectors'
import { PointsInfoType, RouteTypes } from 'types/route.types'

const { Sider } = Layout

export const SideMenu = () => {
  const routeList = useAppSelector(selectRoutes)
  const dispatch = useDispatch()

  const chooseRoute = (points: PointsInfoType[]) => {
    dispatch(addCurrentPoints(points))
  }

  const onClick = (e: any) => {
    chooseRoute(routeList[e.key - 1].pointsInfo)
  }

  return (
    <Sider style={{ background: 'white' }}>
      <Menu
        theme='light'
        mode='inline'
        onClick={onClick}
        items={routeList.map((item: RouteTypes) => ({
          key: item.id,
          label: `Маршрут ${item.id}`,
        }))}
      />
    </Sider>
  )
}
