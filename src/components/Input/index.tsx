import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  type?: 'text' | 'number'
  onChange: (value: string) => void
}

const Input: FC<Props> = ({ type = 'text', styles, onChange, isFullWidth }) => {
  const handleInput = (e: any) => {
    if (e.key === '.' ||e.key === ',') e.preventDefault()
  }

  const handleChange = (e: any) => {
    onChange(e.currentTarget.value)
  }

  return <Styled step="1" onKeyDown={handleInput} onChange={handleChange} type={type} styles={styles} isFullWidth={isFullWidth}/>
}

export default Input
