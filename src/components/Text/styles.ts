import styled, { css } from 'styled-components'
import { Props } from '.'

export default styled.span<Props>`
  margin: 0;
  cursor: ${({ onClick }) => onClick ? 'pointer' : 'inherit'};

  ${({ isBlack }) => isBlack && css`
    font-weight: 700;
  `};
  ${({ isSemibold }) => isSemibold && css`
    font-weight: 600;
  `};

  ${({ isHighlighted }) => isHighlighted && css`
    color: ${({ theme }) => theme.colors.darkRed};
    font-size: 1.6rem;
    font-weight: 900;
    font-style: italic;
  `};

  ${({ isStreched }) => isStreched ? 'width: 100%;' : ''};
  ${({ styles }) => ({ ...styles })}
`
