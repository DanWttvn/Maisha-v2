import styled from 'styled-components'
import LinkRoot from '../../components/ExternalLink'
import Container from '../../components/Container'
import { Props } from '.'

export default styled.footer<Partial<Props>>`
	width: 100%;
	margin-top: 50px;
	background: ${({ theme }) => theme.colors.darkestRed};
	padding: 40px 8%;
	display: flex;
	flex-flow: row wrap;
  
  ${({ styles }) => ({ ...styles })}
`

export const InnerContainer = styled.div<Partial<Props>>`
	margin: 0 auto;
  max-width: 950px;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
`

export const ExternalLink = styled(LinkRoot)`
	transition: color 0.2s ease-in-out;
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
	margin: auto 0;
	background-color: #ccc;
	opacity: 0.5;
`

export const Section = styled(Container)`
	flex: 1;
	padding: 0 20px;
`

