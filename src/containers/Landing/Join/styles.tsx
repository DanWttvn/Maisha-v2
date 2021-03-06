import styled from 'styled-components'
import Button from '../../../components/Button'
import Container from '../../../components/Container'
import InputRoot from '../../../components/Input'
import Text from '../../../components/Text'

export default styled(Container)`
  margin: -80px auto 24px;
  padding: 0 16px;
  z-index: ${({ theme }) => theme.zIndex.medium};
`

export const Input = styled(InputRoot)`
  width: 64px;
  margin-right: 12px;
  font-size: 2.5rem;

  @media ${({ theme }) => theme.breakpoints.sl} {
    font-size: 2rem;
  }
`

export const HelperText = styled(Text)`
  @media ${({ theme }) => theme.breakpoints.sl} {
    text-align: center;
  }
`

export const JoinButton = styled(Button)`
  margin: 0 auto;
  font-size: 3rem;
  font-size: 2.3rem;
  font-weight: 800;
  border-radius: 40px;
  padding: 20px 35px;
  background: ${({ theme }) => theme.colors.offOrange};
  color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `${theme.colors.darkRed} 2px solid`};
  z-index: ${({ theme }) => theme.zIndex.medium};

  @media ${({ theme }) => theme.breakpoints.sl} {
    font-size: 1.8rem;
  }
`
