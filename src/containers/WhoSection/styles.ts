import styled from 'styled-components'
import { Section as SectionRoot, SubSection as SubSectionRoot } from '../../components/Section/styles'
import Text from '../../components/Text'

export const DataNumber = styled(Text)`
	color: ${({ theme }) => theme.colors.darkRed};
	font-size: 7rem;
	font-weight: 900;
	line-height: 7rem;

  ${({ styles }) => ({ ...styles })}
`

export const DataText = styled(Text)`
	color: ${({ theme }) => theme.colors.darkRed};
	font-size: 4.5rem;
	font-weight: 900;
	line-height: 4rem;
`

export const BorderedBox = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.darkRed};
	border-radius: 10px;
	padding: 30px 40px;
	margin: 20px 0;
`
