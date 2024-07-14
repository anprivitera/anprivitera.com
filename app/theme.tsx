'use client'

import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: 'Karla, sans-serif',
    fontSize: 17.5,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    subtitle1: {
      fontFamily: 'Rubik, sans-serif',
      fontStyle: 'italic',
      fontSize: '1.25rem',
      color: '#333',
    },
  },
  palette: {
    mode: 'light',
    text: {
      primary: '#333',
    },
    background: {
      default: '#fdfdfd',
    },
    primary: {
      main: '#284178',
    },
    secondary: {
      main: '#AF5D63',
    },
  }
})

export default function Theme(
  { children }: { children: React.ReactNode }
) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
