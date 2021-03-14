import React, { FC } from 'react'
import { BaseProps } from '../../../models'
import Text from '../../Text'
import Styled, { ArrowRight, ArrowLeft, Button } from './styles'

export interface Props extends BaseProps {
  onChange: () => void
  currentIndex: number
  totalItems?: number
}

const Controls: FC<Props> = ({ currentIndex, totalItems, onChange, styles }) => {

  return (
    <Styled style={styles}>
      <Text>{currentIndex + 1}</Text>
      {/* <Button 
        onClick={onChange.bind(undefined, currentIndex - 1)} 
        isDisabled={currentIndex === 0}
      >
        <ArrowLeft/>
      </Button>
      <Button 
        onClick={onChange.bind(undefined, currentIndex + 1)} 
        isDisabled={!totalItems || currentIndex === totalItems - 1}
      >
        <ArrowRight/>
      </Button> */}
    </Styled>
  )
}

export default Controls
