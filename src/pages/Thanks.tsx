import React, { FC, useContext } from 'react'
import Paragraph from '../components/Paragraph'
import Container from '../components/Container'
import { SubSection } from '../components/Section/styles'
import DataText from '../containers/DataText'
import Footer from '../containers/Footer'
import Navbar from '../containers/Navbar'
import LanguageContext from '../contexts/language'

const Thanks: FC = () => {
  const { lang } = useContext(LanguageContext)

  return (
    <Container direction="vertical" styles={{ minHeight: '100vh' }}>
      <Navbar />
      <SubSection styles={{ flex: 1 }}>
        <DataText type="text" styles={{ margin: 'auto' }}>
          {lang === 'ES' && 'Gracias por tu aportación!'}
          {lang === 'EN' && 'Thanks for your contribution!'}
          {lang === 'SW' && 'Asante kwa mchango wako!'}
        </DataText>
        <Paragraph >
        </Paragraph>
      </SubSection>
      <Footer styles={{ marginTop: 'auto' }} />
    </Container>
  )
}

export default Thanks
