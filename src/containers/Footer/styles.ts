import styled from 'styled-components'
import LinkRoot from '../../components/Link'
import { Props } from '.'

export default styled.footer<Partial<Props>>`
	width: 100%;
	margin-top: 50px;
	background: ${({ theme }) => theme.colors.darkestRed};
	padding: 40px 8%;
  
  ${({ styles }) => ({ ...styles })}
`

export const InnerContainer = styled.div<Partial<Props>>`
	margin: 0 auto;
  max-width: 950px;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
`

//? no se está aplicando
export const Link = styled(LinkRoot)`
	color: ${({ theme }) => theme.colors.offOrange};
	transition: color 0.2s ease-in-out;
  &:hover {
	  color: ${({ theme }) => theme.colors.brightRed};
  }
`

export const HorizontalDivider = styled.div`
	width: 100%;
	height: 1px;
	background-color: #ccc;
	opacity: 0.5;
`

export const VerticalDivider = styled.div`
	width: 1px;
	height: 15px;
	margin: 'auto 0';
	background-color: #ccc;
	opacity: 0.5;
`

