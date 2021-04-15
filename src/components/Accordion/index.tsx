import React, { FC, ChangeEvent, useState, useRef } from 'react'
import { BaseProps } from '../../models'
import theme from '../../styles/theme'
import Text from '../Text'
import Separator from '../Separator'
import Styled, { Icon, Content, Wrapper } from './styles'


export interface Props extends BaseProps {
  title: string
}

const Accordion: FC<Props> = ({ isHidden, title, styles, children, isStreched }) => {
  const [ isOpen, setIsOpen ] = useState(false)
  const contentRef = useRef<HTMLDivElement>()

  console.log(contentRef.current)
  if (isHidden) return null

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Styled styles={styles} isStreched={isStreched}>
      <Icon isOpen={isOpen} onClick={handleToggle}/>
      <Text onClick={handleToggle} weight="semibold" size="s" styles={{ marginTop: 4 }}>{title}</Text>
      <Separator styles={{ margin: '5px 0' }} />
      <Content isOpen={isOpen} height={contentRef?.current?.clientHeight || 0}>
        <Wrapper ref={contentRef}>{children}</Wrapper>
      </Content>
    </Styled>
  )
}

export default Accordion
