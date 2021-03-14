import React, { Children, cloneElement, FC, ReactElement, useEffect, useRef, useState } from 'react'
import Text from '../../Text'
import Styled, { Header, Content, Wrapper } from './styles'
import Controls from '../Controls'
import { BaseProps } from '../../../models'

export interface Props extends BaseProps {
  title: string
  onChange: (i: number) => void
  forcedIndex?: number
}

const Container: FC<Props> = ({ children, forcedIndex, isHidden, title, styles, onChange,  isStreched }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [ currentIndex, setCurrentIndex ] = useState(forcedIndex || 0)
  const [ cardsDimensions, setCardsDimensions ] = useState({ width : 0, height: 0, separation: 0 })

  const scrollWidth = ref?.current?.clientWidth || 0

  useEffect(() => {
    if (cardsDimensions.height === 0 && !!children && !!children[0]?.props?.dimensions) {
      const { width, height, separation } = children[0]?.props?.dimensions
      setCardsDimensions({ width, height, separation })
    }
  }, [children])

  useEffect(() => {
    if (!forcedIndex) return
    setCurrentIndex(forcedIndex)
  }, [forcedIndex])

  //! onclick?
  useEffect(() => {
    if (!ref?.current) return
    
    if (typeof ref.current.scrollTo === 'function') {
      ref.current.scrollTo({ 
        left: (cardsDimensions.width + cardsDimensions.separation) * currentIndex, 
        top: 0, 
        behavior: 'smooth'
      })
    }
  }, [currentIndex, ref.current])

  const handleChange = (i: number) => {
    setCurrentIndex(i)
    if (onChange) onChange(i)
  }

  // const items = Children.map(children, (x, i) => {
  //   return cloneElement(x, { isActive: currentIndex === i, onClick: handleChange.bind(undefined, i) })
  // })

  if (isHidden) return null

  return (
    <Styled styles={styles} isStreched={isStreched}>
      {/* <Header>
        <Text size="l" weight="bold">{title}</Text>
        <Controls control={{ currentIndex, totalItems: totalItems || items?.length || 0 }} onChange={handleChange} testId={`${testId}-control`}/>
      </Header>
      <Content ref={ref} styles={{ height: cardsDimensions.height * 1.2 + 25 }} isStreched>
        <Wrapper style={{ padding: `0 ${scrollWidth/2 - cardsDimensions.width/2}px`, marginTop: 20 }}>
          {items}
        </Wrapper>
      </Content> */}
    </Styled>
  )
}

export default Container
