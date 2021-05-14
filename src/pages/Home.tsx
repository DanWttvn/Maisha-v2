import React, { FC } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Carousel from '../components/Carousel'
import Paragraph from '../components/Paragraph'
import Subtitle from '../components/Subtitle'
import Text from '../components/Text'
import Controls from '../components/Timeline/Controls'
import Title from '../components/Title'
import Footer from '../containers/Footer'
import Navbar from '../containers/Navbar'
import WhoSection from '../containers/WhoSection'
import LanguageContext from '../contexts/language'

const Home: FC = () => {
  const { lang, setLang } = useContext(LanguageContext)

  return (
    <>
      <Navbar />
      <p style={{ marginBottom: 100 }}>usdgfh</p>
      <Link to="/landing">Landing</Link>

      <Button theme="A">Ahgdf</Button>
      <Button theme="A" styles={{ padding: 15 }}>Ahgdf</Button>
      <Button theme="B">Ahgdf</Button>
      <Paragraph >
        jhsgdf ksdjfh sdfh hjsgd
        <Text weight="black" onClick={() => console.log('isudhf')}>ldih f</Text>
        hjgb
        <Text isHighlighted>ldih f</Text>
        flaugdf
      </Paragraph>

      <Carousel.Container
        title="Nuestra experiencia"
        onChange={i => console.log(`Item ${i} is selected`)}
        styles={{ height: 690 }}
        isStreched
      >
        <Carousel.Item src="/images/photo(1).JPG" hasOverlay>
          <Text size="xl" weight="bold" styles={{ color: 'white' }} isStreched>1</Text>
        </Carousel.Item>
        <Carousel.Item src="/images/photo4.jpg" hasOverlay>
          <Text size="xl" weight="bold" styles={{ color: 'white' }} isStreched>2</Text>
        </Carousel.Item>
        <Carousel.Item src="/images/photo11.jpg" hasOverlay>
          <Text size="xl" weight="bold" styles={{ color: 'white' }} isStreched>2</Text>
        </Carousel.Item>
        <Carousel.Item src="/images/photo8.jpg" hasOverlay>
          <Text size="xl" weight="bold" styles={{ color: 'white' }} isStreched>2</Text>
        </Carousel.Item>
        <Carousel.Item src="/images/photo(12).jpg" hasOverlay>
          <Text size="xl" weight="bold" styles={{ color: 'white' }} isStreched>2</Text>
        </Carousel.Item>
        <Carousel.Item src="/images/a(1).jpg" hasOverlay>
          <Text size="xl" weight="bold" styles={{ color: 'white' }} isStreched>2</Text>
        </Carousel.Item>
      </Carousel.Container>
      <Subtitle >Subtitle</Subtitle>
      <Title firstPart="Cómo" secondPart="trabajamos" />
      <Controls onChange={() => console.log('')} currentIndex={3} totalItems={4} styles={{ width: 300 }}></Controls>
      <WhoSection id={'who'} />
      <Footer />
    </>
  )
}

export default Home