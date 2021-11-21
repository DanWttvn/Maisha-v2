import styled from 'styled-components'
import Container from '../../../components/Container'
import { SubSection as SubSectionRoot } from '../../../components/Section/styles'

export const SubSection = styled(SubSectionRoot)`
  @media ${({ theme }) => theme.breakpoints.sl} {
    flex-direction: column;
    align-items: center;
	}
`

export const DataContainer = styled(Container)`
  margin: 30px 0px;
  @media ${({ theme }) => theme.breakpoints.sl} {
    margin: 8px 0px;
	}
`