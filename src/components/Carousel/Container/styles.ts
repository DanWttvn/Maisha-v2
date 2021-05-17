import styled, { StyledProps } from 'styled-components'
import { BaseProps } from '../../../models'

export default styled.section<StyledProps<BaseProps>>`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;

  ${({ isStreched }) => isStreched ? 'width: 100%;' : ''};
  ${({ styles }) => ({ ...styles })}
`

export const Header = styled.div`
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Content = styled.div<StyledProps<BaseProps>>`
  position: relative;
  height: 100%;
  overflow-x: hidden;

  ${({ isStreched }) => isStreched ? 'width: 100%;' : ''};
  ${({ styles }) => ({ ...styles })};
`

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  margin: 5px 0;
  box-sizing: border-box;
  width: fit-content;
  display: flex;
  align-items: center;
  height: 100%;
`
