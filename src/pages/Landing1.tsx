import React, { FC, lazy, Suspense } from 'react'
import Container from '../components/Container'
import Footer from '../containers/Footer'
import Landing from '../containers/Landing'
const Video = lazy(() => import('../components/Video'))

const Landing1: FC = () => {
  return (
    <Container>
      <Landing.Header />
      <Landing.Join variant="1" />
      <Landing.Projects />
      <Container isFullWidth>
        <Suspense fallback={<></>}>
          <Video src="/images/videos/CampanaSocios.mp4" />
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