import styled from 'styled-components'
import { Cross as CrossRoot } from 'styled-icons/entypo'
import { BaseProps } from '../../models'
import DialogRoot from '../Dialog'

export default styled.div<BaseProps>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(50,50,50,.5);
  z-index: ${({ theme }) => theme.zIndex.high};

  ${({ styles }) => ({ ...styles })}
`

export const Dialog = styled(DialogRoot)<BaseProps>`
	width: 90%;
	max-height: 650px;

  @media ${({ theme }) => theme.breakpoints.s} {
    max-height: 85%;
  }

  ${({ styles }) => ({ ...styles })}
`

export const Cross = styled(CrossRoot)`
  position: absolute;
  top: 17px;
  right: 20px;

	color: ${({ theme }) => theme.colors.lightGrey};
  width: 25px;
  cursor: pointer;
`
