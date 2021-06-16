import styled, { css } from 'styled-components'
import { Props } from '.'

//! repasar sizes de textos... 0.95 que sea s y 1 m y asi

export default styled.p<Props>`
/* //! si le pongo el flex, no sigue la frase con spans dentro */
  /* display: flex;
  flex-flow: row wrap; */
  margin-bottom: 16px;
  color: ${({ theme, color }) => color ? theme.colors[color] : 'inherit'};
  word-wrap: break-word;
  white-space: pre-wrap;

  ${({ size }) => size === 'xs' && css`
    font-size: 0.6rem;
    line-height: 24px;
  `}

  ${({ size }) => size === 's' && css`
    font-size: 0.85rem;
    line-height: 1.3rem;
  `}

  ${({ size }) => size === 'm' && css`
    font-size: 1rem;
    line-height: 1.59rem;
  `}

  ${({ size }) => size === 'l' && css`
    font-size: 2rem;
    line-height: 2rem;
  `}

  ${({ size }) => size === 'xl' && css`
    font-size: 3.2rem;
    line-height: 2.35rem;
  `}

  ${({ weight }) => weight === 'normal' && css`
    font-weight: 400;
  `}

  ${({ weight }) => weight === 'semibold' && css`
    font-weight: 500;
  `}

  ${({ weight }) => weight === 'bold' && css`
    font-weight: 600;
  `}

  ${({ weight }) => weight === 'black' && css`
    font-weight: 700;
  `}

  ${({ styles }) => ({ ...styles })}
`
