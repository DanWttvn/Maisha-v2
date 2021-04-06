import styled from 'styled-components'
import { KeyboardArrowRight } from '@styled-icons/material/KeyboardArrowRight'
import { BaseProps } from '../../models'

export default styled.div<BaseProps>`
  display: flex;
  flex-flow: row wrap;

  ${({ isStreched }) => isStreched ? 'width: 100%;' : ''};
  ${({ styles }) => ({ ...styles })};
`

// export const ArrowDown = styled(KeyboardArrowDown)<{ isHidden?: boolean }>`
//   width: 25px;
//   cursor: pointer;
//   color: ${({ theme }) => theme.colors.lightestGrey};

//   ${({ isHidden }) => isHidden ? 'display: none;' : ''};
// `

export const Icon = styled(KeyboardArrowRight)<{ isOpen?: boolean }>`
  width: 25px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.lightestGrey};

  
  ${({ isOpen }) => isOpen ? 'transform: rotate(90deg);' : ''};
	transition: transform 0.4s ease-out;
`

export const Content = styled.article<{ isOpen: boolean, height: number }>`
  display: flex;
  flex-flow: row wrap;
	padding: 0 30px;
	overflow: hidden;

  /* height: auto;
	transition: height 0.4s ease-out;
  ${({ isOpen }) => isOpen ? 'height: 0;' : ''}; */

	height: ${({ isOpen, height }) => isOpen ? `${height}px` : 0};
	transition: height 0.4s ease-out;
`

export const Wrapper = styled.div<{ ref: any }>`
  display: flex;
  flex-flow: row wrap;
`