import styled, { css } from 'styled-components'

export default styled.li<{ isActive?: boolean, onClick?: any }>`
  position: relative;
  
  font-size: 13px;
  color: rgb(170, 170, 170);
  font-weight: 600;
  text-decoration: none;
  padding: 20px;
  transition: 0.3s;
  white-space: nowrap; /* se mantiene la palabra completa */
  text-align: center;
	color: ${({ isActive }) => isActive ? 'rgb(165,42,42)' : 'rgb(170, 170, 170)'};

  &:active {
	  color: rgb(165,42,42);
  }
  &:hover {
	  color: rgb(224, 133, 133);
  }
`

export const SubItemsWrapper = styled.ul<{ isOpen: boolean }>`
  top: 0;
	opacity: 0.3;
  list-style: none; 
  pointer-events: none;
  position: absolute;

  //!: calcular
  left: calc(-50%/2);
	height: 50px;
	padding: 10px 0;
	font-size: 0.85em;
	z-index: 15;
	
	display: flex; flex-flow: row nowrap; justify-content: center; align-items: center;
  transition: all 0.4s ease-in-out;
  
  ${({ isOpen }) => isOpen && css`
    top: 40px;
    opacity: 1;
    pointer-events: all;
  `}
`
