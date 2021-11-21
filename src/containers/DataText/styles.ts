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

  @media ${({ theme }) => theme.breakpoints.sl} {
    font-size: ${({ type }) => type === 'number' ? '5rem' : '3rem'};
    line-height: ${({ type }) => type === 'number' ? '5.3rem' : '3rem'};
  }

  ${({ styles }) => ({ ...styles })}
`
