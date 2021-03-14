import styled from 'styled-components'
import { BaseProps } from '../../../models'

export const Content = styled.div<BaseProps>`
  position: relative;
  box-sizing: border-box;
  min-height: 50px;

  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

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
`

export default styled.section<BaseProps>`
  display: flex;
  flex-direction: column;

  ${({ isStreched }) => isStreched ? 'width: 100%;' : ''};
  ${({ styles }) => ({ ...styles })}
`

export const Header = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
