import React, { FC } from 'react'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

const Provider: FC = ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename="/">
        {children}
      </HashRouter>
    </ThemeProvider>
  )
}

export default Provider
