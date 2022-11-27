import styled from 'styled-components'
import Button from '../../components/Button'
import Input from '../../components/Input'


export const OptionsButton = styled(Button).attrs({
  variant: 'A'
})`
  margin: 10px 5px;
  font-weight: bold;
  font-size: 1.3rem;
`

export const AmountInput = styled(Input)`
  margin-right: 12px;
  font-size: 1.1rem;
  width: 50px;
`