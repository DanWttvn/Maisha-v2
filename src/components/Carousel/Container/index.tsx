import React, { Children, cloneElement, FC, ReactElement, useEffect, useRef, useState } from 'react'
import { BaseProps } from '../../../models'
import Text from '../../Text'
import Styled, { Header } from './styles'
import { Content, Wrapper } from './styles'
import Control from '../Control'
import { Props as ItemProps } from '../Item'

export interface Props extends BaseProps {
  title?: string
  onChange?: (i: number) => void
  sectionTitles: string[]
}

const Container: FC<Props> = ({ children, isHidden, title, sectionTitles, styles, onChange, isStreched }) => {
  const ref = useRef<HTMLDivElement>(null)
  const activeCardRef = useRef<HTMLDivElement>(null)
  const [ currentIndex, setCurrentIndex ] = useState(0)
  const [ cardsWidth, setCardsWidth ] = useState(0)

  const scrollWidth = ref?.current?.clientWidth || 0

  useEffect(() => {
    if (cardsWidth === 0 && !!children) setCardsWidth(scrollWidth * 0.9)
  }, [children])

  useEffect(() => {
    if (!ref?.current) return
    
    if (typeof ref.current.scrollTo === 'function') {
      ref.current.scrollTo({ 
        left: cardsWidth * currentIndex, 
        top: 0, 
        behavior: 'smooth'
      })
    }
  }, [currentIndex, ref.current])

  const handleChange = (i: number) => {
    setCurrentIndex(i)
    if (onChange) onChange(i)
  }

  const items = Children.map(children, (x: ReactElement<ItemProps>, i) => cloneElement(x, { onClick: handleChange.bind(undefined, i), ref: currentIndex === i ? activeCardRef : null }))

  if (isHidden) return null

  return (
    <Styled styles={styles} isStreched={isStreched}>
      <Header>
        <Text size="l" weight="bold">{title}</Text>
      </Header>
      <Content ref={ref} isStreched>
        <Wrapper style={{ marginTop: 20 }}>
          {items}
        </Wrapper>
      </Content>
      <Control control={{ currentIndex, totalItems: items?.length || 0 }} sectionTitles={sectionTitles} onChange={handleChange}/>
    </Styled>
  )
}

export default Container
