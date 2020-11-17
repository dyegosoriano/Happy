import React from 'react'
import Routes from './routes'

import GlobalStyle from './styles/global'
import 'leaflet/dist/leaflet.css'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  )
}
