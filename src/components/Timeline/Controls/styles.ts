import styled from 'styled-components'
import { KeyboardArrowRight } from '@styled-icons/material/KeyboardArrowRight'
import { KeyboardArrowLeft } from '@styled-icons/material/KeyboardArrowLeft'
import ButtonRoot from '../../Button'


export default styled.div`
  display: flex;
  flex-flow: row nowrap;
`

export const Button = styled(ButtonRoot)`
	border: none;
	cursor: pointer;
  color: ${({ theme }) => theme.colors.darkRed};
	
	border-radius: 50%;

  ${({ styles }) => ({ ...styles })}
`

export const ArrowRight = styled(KeyboardArrowRight)`
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  cursor: pointer;
`

export const ArrowLeft = styled(KeyboardArrowLeft)`
  position: absolute;
  top: 0;
  left: 0;
  width: 25px;
  cursor: pointer;
`
