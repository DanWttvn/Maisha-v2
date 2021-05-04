import styled, { css } from 'styled-components'
import { Props } from './'

export default styled.img<Props>`
  ${({ hasOverlay }) => hasOverlay && css`
    filter: brightness(50%);
  `};

  ${({ isStreched }) => isStreched ? 'width: 100%;' : ''};
  ${({ styles }) => ({ ...styles })}
`
