import React, { FC, useContext } from 'react'
import Paragraph from '../components/Paragraph'
import Container from '../components/Container'
import SubSection from '../components/SubSection'
import DataText from '../containers/DataText'
import Footer from '../containers/Footer'
import Navbar from '../containers/Navbar'
import LanguageContext from '../contexts/language'
import Page from '../components/Page'

const Thanks: FC = () => {
  const { lang } = useContext(LanguageContext)

  return (
    <Page>
      <Container direction="vertical" styles={{ minHeight: '100vh' }} isFullWidth>
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
    </Page>
  )
}

export default Thanks
