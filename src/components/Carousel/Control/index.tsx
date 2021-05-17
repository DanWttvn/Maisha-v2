import React, { FC } from 'react'
import { BaseProps } from '../../../models'
import theme from '../../../styles/theme'
import Button from '../../Button'
// import Icon from '../../Icon'
import Text from '../../Text'
import Styled, { ButtonsWrapper, NodesWrapper, NodeWrapper, Node, Line } from './styles'

export interface Props extends BaseProps {
  control: { currentIndex: number, totalItems: number }
  onChange: (i: number) => void
  sectionTitles: string[]
}

const Control: FC<Props> = ({ isHidden, control, sectionTitles, onChange, styles }) => {
  const { currentIndex, totalItems } = control

  if (isHidden) return null

  const nodes = sectionTitles.map((x, i) => {
    const isActive = currentIndex === i
    return (
      <NodeWrapper key={i}>
        <Node />
        <Text onClick={onChange.bind(undefined, i)} weight={isActive ? 'black' : 'bold'} size={isActive ? 'l' : 'm'} styles={{ color: isActive ? theme.colors.darkOrange : theme.colors.white }}>{x}</Text>
      </NodeWrapper>
    )
  })

  return (
    <Styled style={styles}>
      <ButtonsWrapper>
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
      </ButtonsWrapper>
      <NodesWrapper>
        <Line />
        {nodes}
      </NodesWrapper>
    </Styled>
  )
}

export default Control
