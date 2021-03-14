import styled from 'styled-components'
import { Props } from '.'

export default styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction === 'vertical' ? 'column' : 'row'};
  flex-wrap: wrap;

  ${({ isStreched }) => isStreched ? 'width: 100%;' : ''};
  ${({ styles }) => ({ ...styles })}
`
