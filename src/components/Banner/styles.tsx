import styled, { css } from 'styled-components'
import { Props } from '.'

export default styled.div<Props>`
  display: flex;
  flex-flow: row wrap;
  z-index: ${({ theme }) => theme.zIndex.high};
  position: fixed;
  width: 100%;
  padding: 20px 30px;
  bottom: 0;
  left: 0;

  ${({ variant }) => variant === 'A' && css`
    background: rgba(0,0,0,0.7);
    color: ${({ theme }) => theme.colors.white};
  `};

  ${({ variant }) => variant === 'B' && css`
    background: ${({ theme }) => theme.colors.offOrange};
  `};


  ${({ styles }) => ({ ...styles })};
`
