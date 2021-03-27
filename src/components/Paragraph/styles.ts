import styled from 'styled-components'
import { Props } from '.'


export default styled.p<Props>`
  margin-bottom: 16px;
  color: ${({ theme, color = 'darkGrey' }) => theme.colors[color]};
  word-wrap: break-word;
  line-height: 27px;
  display: flex;
  flex-flow: row wrap;
  white-space: pre-wrap;


  ${({ styles }) => ({ ...styles })}
`
