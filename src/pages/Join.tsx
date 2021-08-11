import React, { FC } from 'react'
import Subtitle from '../components/Subtitle'
import { Section, SubSection } from '../components/Section/styles'
import Navbar from '../containers/Navbar'
import Footer from '../containers/Footer'
import JoinForm from '../containers/JoinForm'

const Join: FC = () => {
  return (
    <>
      <Navbar />
      <Section styles={{ minHeight: 'calc(100vh - 254px)' }}>
        <SubSection>
          <Subtitle styles={{ marginTop: 16 }}>Hazte socia/o</Subtitle>
          <JoinForm variant="3" selectedAmount={0}/>
        </SubSection>
      </Section>
      <Footer />
    </>
  )
}

export default Join
