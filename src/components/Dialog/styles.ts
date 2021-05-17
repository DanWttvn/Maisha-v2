import styled from 'styled-components'
import { Cross as CrossRoot } from 'styled-icons/entypo'
import { BaseProps } from '../../models'

export default styled.div<BaseProps>`
  position: relative;
	background: #fff;
	height: fit-content;
	overflow: scroll;
	padding: 32px;
	border-radius: 30px;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
    width: 5px;
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
