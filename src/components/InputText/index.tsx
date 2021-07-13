import React, { FC, ChangeEvent, useState } from 'react'
import { BaseProps, InputProps } from '../../models'
import theme from '../../styles/theme'
import Styled from './styles'

export interface Props extends BaseProps, InputProps {
  label?: string
  name: string
  autocomplete?: string
  type?: 'text' | 'number' | 'email'
  onChange?: (value: string) => void
  helper?: string
  register?: any
}

const InputText: FC<Props> = ({ isHidden, styles, name, label, autocomplete, type = 'text', onChange, isError, helper, isRequired, register, isFullWidth }) => {
  const [ value, setValue ] = useState('')
  const [ formatError, setFormatError ] = useState<Error>()

  //! controlar aqui los invalids de format
  //* faltaria pasar al form que recoriese todos los hijos y les meta un invalid si es required

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
      autoComplete={autocomplete}
      onChange={handleChange}
      error={isError || !!formatError}
      fullWidth={isFullWidth}
      inputRef={register}
      helperText={helper}
      required={isRequired}
      InputLabelProps={{ style: { fontFamily: theme.fonts.main } }}
      inputProps={{ style: { fontFamily: theme.fonts.main, fontWeight: 500 } }}
      style={styles}
    />
  )
}

InputText.displayName = 'InputText'

export default InputText
