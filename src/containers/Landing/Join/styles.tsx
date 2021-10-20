import styled from 'styled-components'
import Container from '../../../components/Container'

export default styled(Container)`
  margin: -80px auto 24px;
  z-index: ${({ theme }) => theme.zIndex.medium};

  @media ${({ theme }) => theme.breakpoints.m} {
    margin-top: -5%;
	}
`