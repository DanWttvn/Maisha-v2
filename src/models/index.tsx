import { CSSProperties, FC, Ref } from 'react'

export interface BaseProps {
  styles?: CSSProperties
  className?: string
  isHidden?: boolean
  isStreched?: boolean
  ref?: Ref<any>
}

export interface Route {
  url: string
  content: FC
}

export type Lang = 'ES' | 'EN' | 'SW'


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
