import styled from 'styled-components'
import { Cross as CrossRoot } from 'styled-icons/entypo'
import { BaseProps } from '../../models'

export default styled.div<BaseProps>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(50,50,50,.5);
  z-index: 100;

  ${({ styles }) => ({ ...styles })}
`

export const Dialog = styled.article<BaseProps>`
  position: relative;
	background: #fff;
	width: 90%;
	height: fit-content;
	max-height: 650px;
	overflow: scroll;
	padding: 32px;
	border-radius: 30px;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
    width: 5px;
  }

  @media ${({ theme }) => theme.breakpoints.s} {
    max-height: 85%;
  }

  ${({ styles }) => ({ ...styles })}
`

export const Cross = styled(CrossRoot)`
  position: absolute;
  top: 17px;
  right: 20px;

	color: ${({ theme }) => theme.colors.lightGrey};
  width: 25px;
  cursor: pointer;
`
