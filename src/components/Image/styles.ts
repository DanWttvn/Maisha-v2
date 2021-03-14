import styled from 'styled-components'
import { Props } from './'

export default styled.img<Props>`
  ${({ isStreched }) => isStreched ? 'width: 100%;' : ''};
  ${({ styles }) => ({ ...styles })}
`
