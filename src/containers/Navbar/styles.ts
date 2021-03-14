import styled from 'styled-components'
import { Bars as BarsRoot } from '@styled-icons/fa-solid/Bars'
import { Cross as CrossRoot } from 'styled-icons/entypo'

export default styled.div`
	width: 100%;
	height: 90px;
	position: fixed;
	top: 0;
	padding: 0 50px;
	background: #fff;
	border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
	box-shadow: ${({ theme }) => theme.shadows.elevation2};
	z-index: 10;
	
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
  align-content: center;
  
  @media ${({ theme }) => theme.breakpoints.l} {
    padding: 0 24px;
  }
`

export const ItemsWrapper = styled.ul`
	position: relative;

	list-style: none;

	display: flex;
	flex-direction: row nowrap;
	justify-content: center;
	align-items: center;

`

export const Bars = styled(BarsRoot)`
	color: ${({ theme }) => theme.colors.lightGrey};
  width: 18px;
  cursor: pointer;
`

export const Cross = styled(CrossRoot)`
	color: ${({ theme }) => theme.colors.lightGrey};
  width: 25px;
  cursor: pointer;
`

