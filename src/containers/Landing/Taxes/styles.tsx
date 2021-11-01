import styled from 'styled-components'
import Container from '../../../components/Container'
import ImageRoot from '../../../components/Image'

export const Image = styled(ImageRoot)`
  height: 400px;

  @media ${({ theme }) => theme.breakpoints.s} {
    width: 100%;
    height: fit-content;
  }
`

export const TextContainer = styled(Container)`
  flex: 1;
  margin-left: 100px;

  @media ${({ theme }) => theme.breakpoints.s} {
    margin-left: 0;
    margin-top: 40px;
  }
`