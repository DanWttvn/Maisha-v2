import styled from 'styled-components'
import { Props } from '.'
import { TextStyles } from '../Text/styles'


export default styled.a<Props>`
  ${TextStyles}
  margin: 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${({ theme, color }) => color ? theme.colors[color] : theme.colors.darkRed};
  /* text-decoration: underline; */

  ${({ isFullWidth }) => isFullWidth ? 'width: 100%;' : ''}
  ${({ styles }) => ({ ...styles })}
`

//! make two variants