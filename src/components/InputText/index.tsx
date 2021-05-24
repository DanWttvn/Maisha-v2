import React, { FC, ChangeEvent, useState } from 'react'
import { BaseProps } from '../../models'
import theme from '../../styles/theme'
import Styled from './styles'

export interface Props extends BaseProps {
  type?: 'text' | 'number'
  onChange?: (value: string) => void
  name: string
  label?: string
  isInvalid?: boolean
  helper?: string
  register?: any
}

const InputText: FC<Props> = ({ isHidden, styles, name, label, type = 'text', onChange, isInvalid, helper, register, isFullWidth }) => {
  const [ value, setValue ] = useState('')
  const [ formatError, setFormatError ] = useState<Error>()
//! controlar aqui los invalids de format
//! faltaria pasar al form que recoriese todos los hijos y les meta un invalid si es required
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const nextValue = event.currentTarget.value
    setValue(nextValue)
    if (onChange) onChange(nextValue)
  }

  if (isHidden) return null

  return (
    <Styled 
      variant="standard"
      margin="normal"
      id={name}
      type={type}
      value={value}
      label={label}
      name={name}
      autoComplete={name}
      onChange={handleChange}
      error={isInvalid || !!formatError}
      fullWidth={isFullWidth}
      inputRef={register}
      helperText={helper}
      InputLabelProps={{ style: { fontFamily: theme.fonts.main } }}
      inputProps={{ style: { fontFamily: theme.fonts.main } }}
      style={styles}
    />
  )
}

export default InputText
