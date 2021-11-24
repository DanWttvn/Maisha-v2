import React, { FC } from 'react'
import Container from '../components/Container'
import Video from '../components/Video'
import Footer from '../containers/Footer'
import Landing from '../containers/Landing'

const Landing1: FC = () => {
  return (
    <Container>
      <Landing.Header />
      <Landing.Join variant="1" />
      <Landing.Projects />
      <Container isFullWidth>
        <Video poster="/images/video2-poster.webp" src="/images/videos/CampañaSocios2.mov" />
      </Container>
      <Landing.Infography />
      <Landing.Taxes />
      <Landing.Faq />
      <Footer styles={{ marginBottom: 83 }} isSimplified/>
    </Container>
  )
}

export default Landing1