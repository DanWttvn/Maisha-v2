import styled from 'styled-components'
import { Props } from '.'

export default styled.input<Props>`
  height: 100%;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  border: none;

  ::-webkit-inner-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  }
  ::-webkit-outer-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  }   

  ${({ isFullWidth }) => isFullWidth ? 'width: 100%;' : ''};
  ${({ styles }) => ({ ...styles })}
`
