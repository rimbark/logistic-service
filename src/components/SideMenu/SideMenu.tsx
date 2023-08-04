import { Layout, Menu } from 'antd'
import { useAppSelector } from 'hooks/redux'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addCurrentPoints } from 'reducers/currentRoute.slice'
import { selectRoutes } from 'selectors/rutes.selectors'
import { PointsInfoType, RouteTypes } from 'types/route.types'

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
    <Layout.Sider collapsible={true} breakpoint='lg'>
      <Menu
        style={{ height: '100%' }}
        theme='dark'
        mode='inline'
        onClick={onClick}
        items={routeList.map((item: RouteTypes) => ({
          key: item.id,
          label: `Маршрут ${item.id}`,
        }))}
      />
    </Layout.Sider>
  )
}
