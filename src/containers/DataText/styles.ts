import styled from 'styled-components'
import Text from '../../components/Text'
import { Props } from '.'

export default styled(Text)<Props>`
  color: ${({ theme }) => theme.colors.darkRed};
  font-weight: 900;
  cursor: default;
  text-align: center;
  font-size: ${({ type }) => type === 'number' ? '7rem' : '4.5rem'};
  line-height: ${({ type }) => type === 'number' ? '7rem' : '4rem'};

  ${({ styles }) => ({ ...styles })}
`
