import styled, { css } from 'styled-components'
import { BaseProps } from '../../models'
import theme from '../../themes/theme'

export const Section = styled.div<BaseProps>`
  width: 100%;
	max-width: 2500px;
	margin: 0 auto;
	/* to skip the navbar height. real sepatation is padding-navbar. to change separation change only margin */
	padding-top: 90px; 
	margin-top: -40px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

  ${({ styles }) => ({ ...styles })}
`

interface Props extends BaseProps {
  hasFullWidth?: boolean
  isNarrow?: boolean
}

export const SubSection = styled.div<Props>`
  position: relative;

	margin-top: -30px;
	/* margin-bottom: 35px; */
	width: 100%;
	padding-top: 90px; /* 35px + 90 del margin */

	display: flex;
	flex-direction: column;
	align-items: center;

  ${({ hasFullWidth }) => !hasFullWidth && css`
    @media ${theme.breakpoints.m} {
      padding-left: 80px; padding-right: 80px;
    }
    @media ${theme.breakpoints.s} {
      padding-left: 40px; padding-right: 40px;
    }
    @media ${theme.breakpoints.xs} {
      padding-left: 20px; padding-right: 20px;
    }
    padding-left: 120px; padding-right: 120px;
  `}

  ${({ isNarrow }) => isNarrow && css`
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

