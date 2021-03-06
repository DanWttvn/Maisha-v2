import styled, { css } from 'styled-components'
import { Props } from '.'

export default styled.div<Props>`
  position: relative;
  width: 100%;
  padding-top: 90px;
  padding-bottom: 20px;
  margin-top: -40px;
  display: flex;
  flex-flow: row wrap;

  ${({ isFullWidth, theme }) => !isFullWidth && css`
    padding-left: 120px; padding-right: 120px;

    @media ${theme.breakpoints.m} {
      padding-left: 80px; padding-right: 80px;
    }
    @media ${theme.breakpoints.s} {
      padding-left: 40px; padding-right: 40px;
    }
    @media ${theme.breakpoints.xs} {
      padding-left: 20px; padding-right: 20px;
    }
  `}

  ${({ isNarrow, theme }) => isNarrow && css`
    padding-left: 170px; padding-right: 170px;
    justify-content: center;

    @media ${theme.breakpoints.l} {
      padding-left: 120px; padding-right: 120px;
    }
    @media ${theme.breakpoints.m} {
      padding-left: 80px; padding-right: 80px;
    }
    @media ${theme.breakpoints.s} {
      padding-left: 40px; padding-right: 40px;
    }
    @media ${theme.breakpoints.xs} {
      padding-left: 20px; padding-right: 20px;
    }
  `}

  ${({ styles }) => ({ ...styles })}
`

