import styled from 'styled-components'
import { Props } from './'

export default styled.form<Partial<Props>>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
  
  ${({ styles }) => ({ ...styles })}
`

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  margin: 0;
`
