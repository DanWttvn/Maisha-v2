import styled, { css } from 'styled-components'
import Subtitle from '../../components/Subtitle'
import Container from '../../components/Container'
import Paragraph from '../../components/Paragraph'

export const BorderedBox = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.darkRed};
	border-radius: 10px;
	padding: 30px 40px;
	margin: 20px 0;
`

export const SubtitleFullWidth = styled(Subtitle)`
  ${({ theme }) => theme && css`
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
`

export const DataContainer = styled(Container)`
  justify-content: space-between;
  margin-bottom: 30px;

	@media ${({ theme }) => theme.breakpoints.m} {
		justify-content: space-around;
	}
`

export const DataParagraph = styled(Paragraph)`
	@media ${({ theme }) => theme.breakpoints.sl} {
    width: 100%;
	}
`
