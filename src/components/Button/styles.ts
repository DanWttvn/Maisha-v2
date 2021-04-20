import styled from 'styled-components'
import { Props } from '.'

const Button = styled.button<Props>`
	border: none;
	cursor: pointer;
	padding: 10px 15px;
	font-size: 1.1rem;
	font-weight: 600;
	border-radius: 10px;
	transition: all 0.2s ease-in-out;
	pointer-events: ${({ isDisabled }) => isDisabled ? 'none' : 'auto'};
`

export const ButtonA = styled(Button)`
	background: ${({ theme }) => theme.colors.darkRed};
	color: ${({ theme }) => theme.colors.offOrange};
	box-shadow: ${({ theme }) => theme.shadows.elevation1};

  &:hover {
    transform: scale(1.05);
	  background: ${({ theme }) => theme.colors.brightRed};
  }

  ${({ styles }) => ({ ...styles })}
`

export const ButtonB = styled(Button)`
	background: ${({ theme }) => theme.colors.offOrange};
	color: ${({ theme }) => theme.colors.darkRed};
	box-shadow: ${({ theme }) => theme.shadows.elevation1};

  &:hover {
    transform: scale(1.05);
	  background: ${({ theme }) => theme.colors.darkRed};
  }

  ${({ styles }) => ({ ...styles })}
`

export const ButtonC = styled(Button)`
	font-size: 3rem;
	font-weight: 700;
	padding: 20px 35px;
	border-radius: 0;

	background: ${({ theme, isSelected }) => isSelected ? theme.colors.offOrange : theme.colors.darkRed};
	color: ${({ theme, isSelected }) => isSelected ? theme.colors.darkRed : theme.colors.offOrange};


  &:hover {
	  transform: none;
	  background: ${({ theme, isSelected }) => isSelected ? theme.colors.offOrange : theme.colors.brightRed};
  }

  ${({ styles }) => ({ ...styles })}
`