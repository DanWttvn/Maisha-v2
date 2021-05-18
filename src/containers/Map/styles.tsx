import styled from 'styled-components'
import ButtonRoot from '../../components/Button'
import ModalRoot from '../../components/Modal'
import { BaseProps } from '../../models'

export const Point = styled.div`
	width: 10px;
	height: 10px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  filter: blur(0.5px);
  background-color: ${({ theme }) => theme.colors.brightRed};
`

export const Button = styled(ButtonRoot)`
  position: absolute;
  z-index: 1;
`
/* //! no encuenta el breakpoint */
/* display: none;

// @media ${({ theme }) => theme.breakpoints.m} {
  display: flex;
} */

export const Card = styled.div<BaseProps>`
  position: absolute;
  border-radius: 0;
	background: ${({ theme }) => theme.colors.darkOrange};
	padding: 15px 20px 10px;
	width: 90%;
	max-width: 800px;
	font-size: 0.95rem;

  @media ${({ theme }) => theme.breakpoints.m} {
    display: none;
  }

  ${({ styles }) => ({ ...styles })}
`

export const Modal = styled(ModalRoot)`
  position: absolute;
  border-radius: 0;
  background: ${({ theme }) => theme.colors.darkOrange};
  padding: 15px 20px 10px;
  font-size: 0.95rem;
  display: none;

  @media ${({ theme }) => theme.breakpoints.m} {
    display: flex;
    width: 42%;
  }

  @media ${({ theme }) => theme.breakpoints.sl} {
		width: 280px;
  }

  ${({ styles }) => ({ ...styles })}
`