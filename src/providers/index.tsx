import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import { LanguageContextProvider } from '../contexts/language'

const Provider: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <LanguageContextProvider>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </LanguageContextProvider>
  </ThemeProvider>
)

export default Provider
