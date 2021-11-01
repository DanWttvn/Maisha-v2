import React, { FC } from 'react'
import Container from '../components/Container'
import Video from '../components/Video'
import FooterSimple from '../containers/FooterSimple'
import Landing from '../containers/Landing'

const Landing1: FC = () => {
  return (
    <Container>
      <Landing.Header />
      <Landing.Join variant="2" />
      <Landing.Projects />
      <Container isFullWidth>
        <Video poster="/images/video2-poster.webp" src="/images/videos/CampañaSocios2.mov" />
      </Container>
      <Landing.Infography />
      <Landing.Taxes />
      <Landing.Faq />
      <FooterSimple styles={{ marginBottom: 83 }} />
    </Container>
  )
}

export default Landing1