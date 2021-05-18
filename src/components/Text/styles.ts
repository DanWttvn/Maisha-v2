import styled, { css } from 'styled-components'
import { Props } from '.'

export default styled.span<Props>`
  margin: 0;
  cursor: ${({ onClick }) => onClick ? 'pointer' : 'inherit'};
  color: ${({ theme, color = 'darkGrey' }) => theme.colors[color]};

  //! responsive: cambio el body y listo
  
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

  ${({ isHighlighted }) => isHighlighted && css`
    color: ${({ theme }) => theme.colors.darkRed};
    font-size: 1.6rem;
    font-weight: 900;
    font-style: italic;
  `};

  ${({ isStreched }) => isStreched ? 'width: 100%;' : ''};
  ${({ styles }) => ({ ...styles })}
`

export const OpenQuote = styled.span<Props>`
  position: relative;
  &::before {
    content: "“";
  }
  ${({ styles }) => ({ ...styles })}
`

export const CloseQuote = styled.span<Props>`
  position: relative;
  &::before {
    content: "”";
  }
  ${({ styles }) => ({ ...styles })}
`

