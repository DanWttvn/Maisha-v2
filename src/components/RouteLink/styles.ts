import styled from 'styled-components'
import { Link as RootLink } from 'react-router-dom'
import { TextProps } from '../../models'
import { TextStyles } from '../Text/styles'

export default styled(RootLink)<TextProps>`
  ${TextStyles}
  margin: 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${({ theme, color }) => color ? theme.colors[color] : theme.colors.darkRed};
  text-decoration: underline;

  //! falta hover aqui y en link
  ${({ isFullWidth }) => isFullWidth ? 'width: 100%;' : ''}
  ${({ styles }) => ({ ...styles })}
`
