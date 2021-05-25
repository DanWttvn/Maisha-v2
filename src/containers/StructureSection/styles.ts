import styled, { css } from 'styled-components'
import Image from '../../components/Image'

export const StructureCard = styled.div`
  width: 370px;
	max-width: 650px;
	margin: 0 25px;
`

export const GroupCard = styled.div`
	width: 50%;
	max-width: 450px;
	padding: 0 30px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;

	${({ theme }) => css`
		@media ${theme.breakpoints.sl} {
			width: 100%;
		}
	`}
`

export const GroupsBlock = styled.div`
	margin-top: 30px;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: flex-start;

	${({ theme }) => css`
		@media ${theme.breakpoints.xl} {
			width: 100%;
		}
	`}
`

export const CommissionIcon = styled(Image)`
	height: 150px;
	margin: 20px 0;

	${({ theme }) => css`
		@media ${theme.breakpoints.s} {
			height: 120px;
		}
	`}
`