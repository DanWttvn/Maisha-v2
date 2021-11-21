import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  type?: 'text' | 'number'
  onChange: (value: string) => void
  min?: number
}

const Input: FC<Props> = ({ type = 'text', styles, className, min, onChange, isFullWidth }) => {
  const handleInput = (e: any) => {
    if (e.key === '.' || e.key === ',') e.preventDefault()
  }

  const handleChange = (e: any) => {
    onChange(e.currentTarget.value)
  }

  return <Styled step="1" min={min} onKeyDown={handleInput} onChange={handleChange} type={type} styles={styles} className={className} isFullWidth={isFullWidth}/>
}

export default Input
