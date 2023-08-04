import 'styles/index.scss'
import { Layout } from 'antd'
import { Map } from 'components/Map/Map'
import { SideMenu } from 'components/SideMenu/SideMenu'
import React from 'react'

export const App = () => {
  return (
    <>
      <Layout>
        <SideMenu />
        <Layout>
          <Map />
        </Layout>
      </Layout>
    </>
  )
}
