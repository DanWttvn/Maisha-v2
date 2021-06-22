import styled from 'styled-components'
import Text from '../../components/Text'
import { Props } from '.'
// import { BaseProps } from '../../models'

export default styled(Text)<Props>`
  color: ${({ theme }) => theme.colors.darkRed};
  font-weight: 900;
  cursor: default;
  text-align: center;
  font-size: ${({ type }) => type === 'number' ? '7rem' : '4.5rem'};
  line-height: ${({ type }) => type === 'number' ? '7rem' : '4rem'};

  ${({ styles }) => ({ ...styles })}
`

// export const DataContainer = styled.div<BaseProps>`
//   display: flex;
//   flex-direction: column;
//   border-radius: 7rem;
//   padding: 40px;

//   &:hover {
//     transform: scale(1.1);
//     box-shadow: ${({ theme }) => theme.shadows.elevation2};
//   }

// transition: all 0.5s ease;
//   ${({ styles }) => ({ ...styles })}
// `