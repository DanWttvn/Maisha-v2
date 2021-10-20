import styled from 'styled-components'
import Container from '../../../components/Container'
import { BaseProps } from '../../../models'

export default styled(Container)`
  position: relative;
  height: 70vh;
  min-height: 600px;
  max-height: 1000px;
  overflow: hidden;
`

const Quote =  styled.span<BaseProps>`
  position: relative;
  color: white;
  font-size: 120px;
  font-style: italic;
  font-weight: 800;
`

export const OpenQuote = styled(Quote)`
  top: 1px;
  line-height: 75px;
  margin-right: -20px;
  left: 7px;

  &::before {
    content: "“";
  }
`

export const CloseQuote = styled(Quote)`
  top: 20px;
  line-height: 55px;

  &::before {
    content: "”";
  }
`
