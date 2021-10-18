import React, { FC } from 'react'
import Container from '../../../components/Container'
import Image from '../../../components/Image'
import Text from '../../../components/Text'
import { OpenQuote, CloseQuote } from '../../../components/Text/styles'
import defaultTheme from '../../../styles/theme'
import Paragraph from '../../../components/Paragraph'

const Header: FC = () => {
  return (
    <Container styles={{ position: 'relative', height: '70vh', minHeight: 600, maxHeight: 1000, overflow: 'hidden' }} isFullWidth>
      <Paragraph styles={{ zIndex: defaultTheme.zIndex.medium, width: '70%', margin: 'auto' }}>
        <OpenQuote styles={{ color: 'white', fontSize: 120, top: 1, lineHeight: '75px', fontStyle: 'italic', fontWeight: 800, marginRight: -20, left: 7 }} />
        <Text weight="black" color="white" styles={{ fontStyle: 'italic', fontSize: '3.5rem', lineHeight: '4.7rem' }}>Mucha gente pequeña, en lugares pequeños, haciendo cosas pequeñas, puede cambiar el mundo</Text>
        <CloseQuote styles={{ color: 'white', fontSize: 120, top: 20, lineHeight: '55px', fontStyle: 'italic', fontWeight: 800 }} />
        <Text weight="black" color="white" styles={{ marginLeft: 24, fontWeight: 800, fontSize: '3.5rem', lineHeight: '4.7rem' }}>E. Galeno</Text>
      </Paragraph>
      <Image src="/images/playing_kids.jpg" styles={{ position: 'absolute' }} hasOverlay isFullWidth />
    </Container>
  )
}
export default Header