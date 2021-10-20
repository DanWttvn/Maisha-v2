import styled from 'styled-components'
import Container from '../../../components/Container'

export const Project = styled(Container)`
  width: 33%;
  padding: 25px 20px;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.sl} {
    width: 50%;
	}

  @media ${({ theme }) => theme.breakpoints.s} {
    width: 100%;
    padding: 0;
	}
`

export const ProjectContainer = styled(Container)`
  justify-content: space-between;
  margin-bottom: 56px;

  @media ${({ theme }) => theme.breakpoints.sl} {
    justify-content: center;
	}
`