import React, { FC, lazy, Suspense } from 'react'
import Container from '../components/Container'
import Footer from '../containers/Footer'
import Landing from '../containers/Landing'
const Video = lazy(() => import('../components/Video'))

const Landing1: FC = () => {
  return (
    <Container>
      <Landing.Header />
      <Landing.Join variant="2" />
      <Landing.Projects />
      <Container isFullWidth>
        <Suspense fallback={<></>}>
          <Video poster="/images/video2-poster.webp" src="/images/videos/CampanaSocios2.mov" />
        </Suspense>
      </Container>
      <Landing.Infography />
      <Landing.Taxes />
      <Landing.Faq />
      <Footer styles={{ marginBottom: 83 }} isSimplified/>
    </Container>
  )
}

export default Landing1