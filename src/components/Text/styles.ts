import styled, { css } from 'styled-components'
import { TextProps, BaseProps } from '../../models'

export const TextStyles = css<TextProps>`
  text-align: ${({ isCentered }) => isCentered ? 'center' : 'inherit'};

  ${({ size }) => size === 'xs' && css`
    font-size: 0.75rem;
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
    line-height: 4rem;
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
`

export default styled.span<TextProps>`
  ${TextStyles}
  margin: 0;
  color: ${({ theme, color }) => color ? theme.colors[color] : 'inherit'};
  cursor: ${({ onClick }) => onClick ? 'pointer' : 'inherit'};

  ${({ isHighlighted }) => isHighlighted && css`
    color: ${({ theme }) => theme.colors.darkRed};
    font-size: 1.6rem;
    font-weight: 900;
    font-style: italic;
  `};
  ${({ isFullWidth }) => isFullWidth ? 'width: 100%;' : ''};
  ${({ styles }) => ({ ...styles })}
`

export const OpenQuote = styled.span<BaseProps>`
  position: relative;
  &::before {
    content: "“";
  }
  ${({ styles }) => ({ ...styles })}
`

export const CloseQuote = styled.span<BaseProps>`
  position: relative;
  &::before {
    content: "”";
  }
  ${({ styles }) => ({ ...styles })}
`

