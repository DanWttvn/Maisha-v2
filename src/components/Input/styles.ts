import styled from 'styled-components'
import { Props } from '.'

export default styled.input<Props>`
  width: 100px;
  height: 100%;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;

  ::-webkit-inner-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  }
  ::-webkit-outer-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  }   

  ${({ isStreched }) => isStreched ? 'width: 100%;' : ''};
  ${({ styles }) => ({ ...styles })}
`
