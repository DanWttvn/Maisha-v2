import React, { FC } from 'react'
import { BaseProps } from '../../../models'
import Button from '../../Button'
// import Icon from '../../Icon'
import Text from '../../Text'
import Styled from './styles'

export interface Props extends BaseProps {
  control: { currentIndex: number, totalItems: number }
  onChange: (i: number) => void
}

const Control: FC<Props> = ({ isHidden, control, onChange, styles }) => {
  const { currentIndex, totalItems } = control

  if (isHidden) return null

  return (
    <Styled style={styles}>
      <Text size="s" weight="semibold">{currentIndex + 1}/{totalItems}</Text>
      <Button 
        theme="B"
        onClick={onChange.bind(undefined, currentIndex - 1)} 
        isDisabled={currentIndex === 0}
      >
        a
        {/* <Icon name="navigate_before" color="darkNebulae75" /> */}
      </Button>
      <Button 
        theme="B"
        onClick={onChange.bind(undefined, currentIndex + 1)} 
        isDisabled={!totalItems || currentIndex === totalItems - 1}
      >
        b
        {/* <Icon name="navigate_next" color="darkNebulae75"  /> */}
      </Button>
    </Styled>
  )
}

export default Control
