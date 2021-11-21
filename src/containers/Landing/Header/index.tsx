import React, { FC } from 'react'
import Paragraph from '../../../components/Paragraph'
import Styled, { OpenQuote, CloseQuote, Text } from './styles'

const Header: FC = () => {
  return (
    <Styled>
      <Paragraph>
        <OpenQuote />
        <Text weight="black" color="white" size="xl" styles={{ fontStyle: 'italic' }} >Mucha gente pequeña, en lugares pequeños, haciendo cosas pequeñas, puede cambiar el mundo</Text>
        <CloseQuote />
        <Text weight="black" color="white" size="xl" styles={{ marginLeft: 18 }}>E. Galeno</Text>
      </Paragraph>
    </Styled>
  )
}
export default Header