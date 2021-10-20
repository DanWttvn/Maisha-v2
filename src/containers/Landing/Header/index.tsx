import React, { FC } from 'react'
import Image from '../../../components/Image'
import Text from '../../../components/Text'
import defaultTheme from '../../../styles/theme'
import Paragraph from '../../../components/Paragraph'
import Styled, { OpenQuote, CloseQuote } from './styles'

const Header: FC = () => {
  return (
    <Styled isFullWidth>
      <Paragraph styles={{ zIndex: defaultTheme.zIndex.medium, width: '70%', margin: 'auto' }}>
        <OpenQuote />
        <Text weight="black" color="white" styles={{ fontStyle: 'italic', fontSize: '3.5rem', lineHeight: '4.7rem' }}>Mucha gente pequeña, en lugares pequeños, haciendo cosas pequeñas, puede cambiar el mundo</Text>
        <CloseQuote />
        <Text weight="black" color="white" styles={{ marginLeft: 24, fontWeight: 800, fontSize: '3.5rem', lineHeight: '4.7rem' }}>E. Galeno</Text>
      </Paragraph>
      {/* //! fix responsive */}
      <Image src="/images/playing_kids.jpg" styles={{ position: 'absolute' }} hasOverlay isFullWidth />
    </Styled>
  )
}
export default Header