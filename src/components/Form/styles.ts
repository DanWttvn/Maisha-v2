import styled from 'styled-components'
import { Props } from './'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core'
import theme from '../../styles/theme'

export default styled.form<Partial<Props>>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
  
  ${({ styles }) => ({ ...styles })}
`

export const InputText = withStyles({
  root: {
    fontFamily: theme.fonts.main,
    boxSizing: 'border-box',
    border: 'none',
    outline: 'none',
    lineHeight: 1.15,
    color: theme.colors.darkestRed,
    '& label.Mui-focused': {
      color: 'green',
    },
  }
})(TextField)
