import { CSSProperties, FC, Ref } from 'react'

export interface BaseProps {
  styles?: CSSProperties
  isHidden?: boolean
  isStreched?: boolean
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
  colors: string
  zIndex: {
    low: number
    medium: number
    high: number
  }
  shadows: {
    elevation1: string
    elevation2: string
    elevation3: string
    elevation4: string
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
