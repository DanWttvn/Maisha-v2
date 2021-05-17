import styled from 'styled-components'
import { Cross as CrossRoot } from 'styled-icons/entypo'
import ButtonRoot from '../../components/Button'
import DialogRoot from '../../components/Dialog'

export const Point = styled.div`
	width: 10px;
	height: 10px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  filter: blur(0.5px);
  background-color: ${({ theme }) => theme.colors.brightRed};
`

export const Cross = styled(CrossRoot)`
	color: ${({ theme }) => theme.colors.white};
  width: 25px;
`

//! no funciona...
export const Button = styled(ButtonRoot)`
	position: relative;
  top: 50%;
  left: 50%;
  background: red;
`

export const Dialog = styled(DialogRoot)`
  background: ${({ theme }) => theme.colors.darkOrange};
`
