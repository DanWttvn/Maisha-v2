import styled, { css } from 'styled-components'
import { Props } from '.'


export default styled.p<Props>`
  margin-bottom: 16px;
  color: ${({ theme, color = 'darkGrey' }) => theme.colors[color]};
  word-wrap: break-word;
  display: flex;
  flex-flow: row wrap;
  white-space: pre-wrap;

  ${({ size }) => size === 'xxs' && css`
    font-size: 0.6rem;
    line-height: 24px;
  `}

  ${({ size }) => size === 'xs' && css`
    font-size: 0.95rem;
    line-height: 24px;
  `}

  ${({ size }) => size === 's' && css`
    font-size: 1rem;
    line-height: 24px;
  `}

  ${({ size }) => size === 'm' && css`
    font-size: 1.2rem;
    line-height: 24px;
  `}

  ${({ size }) => size === 'l' && css`
    font-size: 2rem;
    line-height: 24px;
  `}

  ${({ size }) => size === 'xl' && css`
    font-size: 3rem;
    line-height: 24px;
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
