import styled from 'styled-components'
import { KeyboardArrowRight } from '@styled-icons/material/KeyboardArrowRight'

export const Arrow = styled(KeyboardArrowRight)`
  color: ${({ theme }) => theme.colors.darkestRed};
`

export const Input = styled.input`
  width: 310px;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  padding: 8px 12px;

  @media ${({ theme }) => theme.breakpoints.sl} {
    width: 90%;
		right: 0;
		left: 0;
		margin: 0 auto;
  }
`