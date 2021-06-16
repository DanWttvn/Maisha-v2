import { CSSProperties, FC, Ref } from 'react'

export interface BaseProps {
  styles?: CSSProperties
  isHidden?: boolean
  isFullWidth?: boolean
  ref?: Ref<any>
  className?: string
}

export interface Route {
  url: string
  content: FC
}

export interface Theme {
  fonts: {
    main: string
  }
  colors: {
    black: string
    white: string
    darkGrey: string
    lightGrey: string
    lightestGrey: string
    darkestRed: string
    darkRed: string
    brightRed: string
    offRed: string
    lightRed: string
    darkOrange: string
    offOrange: string
  },
  zIndex: {
    low: number
    medium: number
    high: number
  }
  shadows: {
    elevation1: string
    elevation2: string
  }
  breakpoints: {
    xs: string
    s: string
    sl: string
    m: string
    l: string
    xl: string
  }
}

export interface ThemeProps {
  theme: Theme
}

export type FormDraft<T> = { [P in keyof Partial<T>]: T[P] }

export type Language = 'ES' | 'EN' | 'SW'
