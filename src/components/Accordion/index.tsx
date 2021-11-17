import React, { FC, useState, useRef } from 'react'
import { BaseProps } from '../../models'
import Text from '../Text'
import Separator from '../Separator'
import Styled, { Icon, Content, Wrapper, Header } from './styles'


export interface Props extends BaseProps {
  title: string
}

const Accordion: FC<Props> = ({ isHidden, title, styles, children, isFullWidth }) => {
  const [ isOpen, setIsOpen ] = useState(false)
  const contentRef = useRef<HTMLDivElement>()

  if (isHidden) return null

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Styled styles={styles} isFullWidth={isFullWidth}>
      <Header onClick={handleToggle} >
        <Text weight="bold" styles={{ marginTop: 4 }}>
          <Icon isOpen={isOpen} onClick={handleToggle}/>
          {title}
        </Text>
        <Separator styles={{ margin: '5px 0' }} />
      </Header>
      <Content isOpen={isOpen} height={contentRef?.current?.clientHeight || 0}>
        <Wrapper ref={contentRef}>{children}</Wrapper>
      </Content>
    </Styled>
  )
}

export default Accordion
