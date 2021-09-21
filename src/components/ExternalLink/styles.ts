import styled, { css } from 'styled-components'
import { Props } from '.'
import { TextStyles } from '../Text/styles'

//! copiar estilos de AppLink
export default styled.a<Props>`
  ${TextStyles}
  margin: 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${({ theme, color }) => color ? theme.colors[color] : theme.colors.darkRed};

  ${({ variant }) => variant === 'A' && css`
    text-decoration: underline;
  `};

  ${({ variant }) => variant === 'B' && css`
    color: rgb(170, 170, 170);
    &:hover {
      color: rgb(224, 133, 133);
    }
  `};

  ${({ isFullWidth }) => isFullWidth ? 'width: 100%;' : ''}
  ${({ styles }) => ({ ...styles })}
`
