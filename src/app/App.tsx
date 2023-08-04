import 'styles/index.scss'
import { Layout } from 'antd'
import { Map } from 'components/Map/Map'
import { SideMenu } from 'components/SideMenu/SideMenu'
import React from 'react'
import styles from './App.module.scss'

export const App = () => {
  return (
    <Layout className={styles.container}>
      <div className={styles.insideContainer}>
        <SideMenu />
        <Map />
      </div>
    </Layout>
  )
}
