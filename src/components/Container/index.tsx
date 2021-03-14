import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  isStreched?: boolean
  direction?: 'horizontal' | 'vertical'
}

const Container: FC<Props> = ({ styles, children, isStreched, direction='horizontal' }) => {
  return <Styled styles={styles} direction={direction} isStreched={isStreched}>{children}</Styled>
}

Container.displayName = 'Container'

export default Container
