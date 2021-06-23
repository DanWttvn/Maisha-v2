import React, { FC } from 'react'
import Container from '../components/Container'
import Video from '../components/Video'
import FooterSimple from '../containers/FooterSimple'
import Landing from '../containers/Landing'

const Landing1: FC = () => {
  return (
    <Container>
      <Landing.Header />
      <Landing.Join />
      <Landing.Projects />
      <Container isFullWidth>
        <Video src="/images/videos/CampañaSocios.mp4" />
      </Container>
      <Landing.Infography />
      <Landing.Taxes />
      <Landing.Faq />
      <FooterSimple styles={{ marginBottom: 83 }} />
    </Container>
  )
}

export default Landing1