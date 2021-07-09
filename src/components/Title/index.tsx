import React, { FC, useEffect, useState } from 'react'
import { BaseProps } from '../../models'
import useIntersection from '../../hooks/useIntersection'
import Styled, {  Wrapper } from './styles'

export interface Props extends BaseProps {
  firstPart: string
  secondPart?: string
}

const Title: FC<Props> = ({ firstPart, secondPart, styles }) => {
  const [ isVisible, setIsVisible ] = useState(false)
  const { isNear, elementRef } = useIntersection(false, '500px')

  useEffect(() => {
    if (isNear) setIsVisible(true)
  }, [ isNear ])

  return (
    <Styled styles={styles} ref={elementRef}>
      <Wrapper content={firstPart} isVisible={isVisible}>
        {firstPart}
      </Wrapper>
      {!!secondPart && 
        <Wrapper content={secondPart} isVisible={isVisible}>
          {secondPart}
        </Wrapper>
      }
    </Styled>
  )
}

Title.displayName = 'Title'

export default Title
