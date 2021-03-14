import styled from 'styled-components'
import { Section as SectionRoot, SubSection as SubSectionRoot } from '../../components/Section/styles'
import { BaseProps } from '../../models' 

export default styled(SectionRoot)`
  /* background: green; */

`

export const SubSection = styled(SubSectionRoot)`
  /* background: green; */

`

export const Card = styled.div<BaseProps>`
  position: absolute;
	background: ${({ theme }) => theme.colors.darkOrange};
	padding: 15px 20px 10px;
	width: 90%;
	max-width: 800px;
	font-size: 0.95rem;

  @media ${({ theme }) => theme.breakpoints.m} {
    width: 42%;
  }

  @media ${({ theme }) => theme.breakpoints.sl} {
    display: none;
		width: 280px;
  }

  ${({ styles }) => ({ ...styles })}
`
