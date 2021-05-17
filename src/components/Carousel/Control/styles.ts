import styled from 'styled-components'

export default styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 1;
	bottom: 130px;
	width: 100%;
  padding: 0 50px;
`

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`

export const NodesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Line = styled.div`
	position: absolute;
	width: 90%;
	height: 2px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.darkOrange};
  bottom: 46px;
`

export const NodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Node = styled.div`
  position: relative;
	padding: 15px 0;
	color: white;
	font-weight: 600;
	left: -1px;
	z-index: 1;
	cursor: pointer;
	border-radius: 3px;

	display: flex;
	justify-content: center;

	transition: color 0.3s ease-in-out;

  &::before {
    position: relative;
    content: "";
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: ${({ theme }) => `1px solid ${theme.colors.darkOrange}`};
    background: rgba(241, 98, 58, 0.4);
    left: 50%;
    transform: translateX(-7px);
  }

  &::after {
    position: relative;
    content: "";
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #fff;
    top: 6px;
    left: -50%;
    transform: translateX(2px);
  }
`
