import React, { useState, FC } from 'react'
import Styled, {  Wrapper } from './styles'
import { BaseProps } from '../../models'

export interface Props extends BaseProps {
  firstPart: string
  secondPart?: string
}

const Title: FC<Props> = ({ firstPart, secondPart, styles }) => {
  const [ isVisible, setIsVisible ] = useState(false)

  return (
    <Styled styles={styles}>

      <Wrapper content={firstPart} isVisible={isVisible}>
        {firstPart}
      </Wrapper>

      {!!secondPart && 
        <Wrapper content={secondPart} isVisible={isVisible}>
          {secondPart}
        </Wrapper>
      }
      {/* //todo: ver como visible */}
      <button onClick={() => setIsVisible(!isVisible)}>VISIBLE</button>

    </Styled>
  )
}

export default Title
