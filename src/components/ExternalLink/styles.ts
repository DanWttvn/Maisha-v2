import styled from 'styled-components'
import { Props } from '.'
import { LinkStyles } from '../AppLink/styles'
import { TextStyles } from '../Text/styles'

export default styled.a<Props>`
  ${TextStyles}
  ${LinkStyles}
`
