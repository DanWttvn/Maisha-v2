import styled from 'styled-components'
import { BaseProps } from '../../../models'
import TextRoot from '../../../components/Text'

export default styled.div`
  position: relative;
	display: flex;
	flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
	padding: 7% 7% 10%;
  line-height: 1.59rem;

  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/playing_kids.webp');
  background-size: cover;
  background-position: center;
  height: 70vh;
  max-height: 600px;
`

const Quote =  styled.span<BaseProps>`
  position: relative;
  color: white;
  font-size: 120px;
  font-style: italic;
  font-weight: 800;

  @media ${({ theme }) => theme.breakpoints.sl} {
    font-size: 60px;
  }
`

export const OpenQuote = styled(Quote)`
  top: 1px;
  line-height: 75px;
  margin-right: -20px;
  left: 7px;

  &::before {
    content: "“";
  }
`

export const CloseQuote = styled(Quote)`
  top: 20px;
  line-height: 55px;

  &::before {
    content: "”";
  }

  @media ${({ theme }) => theme.breakpoints.sl} {
    top: 10px;
    line-height: 12px;
  }
`

export const Text = styled(TextRoot)`
  font-size: 3.4rem;
  line-height: 4.7rem;
  
  @media ${({ theme }) => theme.breakpoints.sl} {
    font-size: 2rem;
    line-height: 3rem;
  }
`
